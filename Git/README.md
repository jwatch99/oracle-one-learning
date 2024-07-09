# GitHub Learning

Summary and most important aspects related to Git, GitHub and synergy with VSCode and projects.

## Starting up

- You can create a new repository on various websites, like [GitHub](https://github.com/new)
    - You can add a README file with [markdown syntax]((https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)) like this one

## Adding files with GitHub

- You can **add files** using the GitHub website directly by clicking on [Add File](https://github.com/jwatch99/oracle-one-learning/new/main) or at github.com/{user}/{repo}/new/{branch}
- When updating or creating files, a **"Commit changes" textbox** will be available to add any specifics to the change you made, if no changes were made, the default values on grey will be used for the commit
- You can watch commits on https://github.com/{user}/{repo}/commits/{branch - optional}
    - The syntax for this is called [diff](https://en.wikipedia.org/wiki/Diff)

## Setting up repository on machine

Using the Git Bash will be preferably for this purpose, but any terminal is fine.

- To bring a repository that is hosted somewhere like GitHub, you can use `git clone {url}`
- Using `cd` to go to your *repository* folder and using `ls -la` will show you a hidden folder `.git/` were all the changes are tracked 

## Updating your local changes

- After making some changes, you can use `git -status` to show you files updated or created
- When creating new files, using the `add` command will let you *track* changes for them to be committed.
    - To track all the files, you can use for brevity `git add .` 
- You can commit your messages with `git commit -m "Some message"`.
    - The message is mandatory, and should include the **why or what**.
    - You can add an extended description by something like `git commit -m "Main message" -m "Another message"`
- The commit still only saves the changes locally, to put it live use `git push origin main`.
    - **origin** is a keyword used by git to know the location of the local repository
    - **master** is the *branch* we want to push

## GitHub Settings

### Collaborators

- You can add collaborators on Settings >  Collaborators > Manage Access

- You can watch commits on https://github.com/{user}/{repo}/commits/{branch - optional}


## Glossary

- **Directory:** Folder
- **CLI:** Command Line Interface
- **Repository:** Where your project is kept
- **GitHub:** A website where you host your git repositories.
- **md:** Markdown file extension for general formatting compatible with HTML


## To research

*For efficiency, ask AI*

You can use git bash to import locally your core.
- Install git: https://git-scm.com/download/win
- Run on Git Bash the following commands to set up
    - `git config --global user.name "First Name Last Name"`
    - `git config --global user.email youremail@address.com`
    - `git config --list` *must show name and email address*
    - `git clone {url}` to clone a git
    - `git log` o `git log --oneline` to see the log of changes to the git

- Commands to create: `git clone [url]` and `git init`
- Commands to verify git: `git status`, `git log`, `git diff` and `git branch`
- Commands to add: `git add.` and `git add [archivo]`
- Commands to move: `git commit -m "[message]"`
- Commands to send and download updates are `git push` and `git pull`
- To make changes: `git checkout -b [branch-name]`, `git merge`, `git switch` and `git restore --source [hash] [file]`
Commands git status, add, commit, push, diff, restore, branch, merge, hash, checkout, init
- How to use git with Visual Studio Code

