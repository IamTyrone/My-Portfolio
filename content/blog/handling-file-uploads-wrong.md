# You could be handling file uploads wrong!

## The problem with direct server uploads

Traditionally📜, when files are uploaded in our apps, we send them using some format like form data, our backend processes the files and saves them on disk or to a third party storage provider like AWS s3. This process is depicted in the first graphic. The problem with this is your server handles large inbound traffic when receiving the files and then large outbound traffic when sending the files to your storage provider. This is very heavy on the server since for starters, that file is handled in memory first, and stays in memory until it is sent. The network and compute resources expended here are large.

Instead, you could use this neat concept of signed URLs where you can generate a safe URL to a private s3 bucket🪣 from your server, send it to the client side, and have the client side upload the file directly to s3 without going through your server(As in the second part of the graphic).This reduces your compute resources immensely!

However, there are cases where you might want your server to handle your files before storing them. Maybe you are doing some heavy processing🤷🏼‍♂️, in that case, the traditional method can be difficult to forgo. But in most cases, signed URLs will do you a world of good!
---

*Sometimes, its better to do the simpler thing, then eventually do the right thing. It is a tradeoff trade after all, software engineering. Right?*
