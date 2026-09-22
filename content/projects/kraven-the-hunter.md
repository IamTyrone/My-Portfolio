I built Kraven because the problem was real and the existing solutions were either too slow, too expensive, or too dumb. So I built my own. End to end.

The ML pipeline was the most interesting part. I engineered 14 features from raw URLs: Shannon entropy, digit ratio, special character density, IP-based hostname detection, subdomain count, path depth, URL shortener detection, @ symbol presence, double-slash redirects, domain length, and HTTPS usage. I trained a scikit-learn RandomForest classifier on a merged dataset of ~500K malicious and benign URLs. The model outputs probability-based confidence scores via predict_proba, not just binary labels, giving users a nuanced threat assessment rather than a blunt yes/no.

The FastAPI backend exposes endpoints for URL prediction, community threat reporting, and health checks. It features model hot-reloading: it detects when the .pkl file changes on disk and swaps it in without downtime. There's also a community report lookup that overrides ML predictions with crowd-sourced intelligence, which is a nice touch.

When community report counts cross a configurable threshold, the API dispatches an async Celery task to a dedicated worker process. The worker merges community-reported URLs with the original training data and retrains the model, all without blocking the API. RabbitMQ serves as the message broker between the API and the worker.

The Chrome extension (Manifest V3) has two layers of protection: a content script that automatically scans every page the user visits and redirects to a warning page if the confidence score exceeds 85%, and a popup interface where users can manually scan the current page and see the full threat report inline, without ever leaving the browser.

The whole backend is containerised with Docker Compose running three services: the FastAPI engine, the Celery worker, and RabbitMQ. The engine and worker share a Docker volume for the model file. The React frontend is deployed to Vercel as a static SPA.
