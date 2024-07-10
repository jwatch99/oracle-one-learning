# GitHub Learning

Summary and most important aspects related to Git, GitHub and synergy with VSCode and projects.

## [Starting up](https://www.youtube.com/watch?v=RGOj5yH7evk)

- You can create a new repository on various websites, like [GitHub](https://github.com/new)
    - You can add a README file with [markdown syntax]((https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)) like this one
- You can also fork a repository from GitHub using the **fork** option in the repository page and create a pull request for the original repository

- Set Authentication on git with
    - `git config --global user.name "First Name Last Name"`
    - `git config --global user.email youremail@address.com`
    - `git config --list` *must show name and email address*
    - You can also use [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- You can start in your machine, creating a folder and some file and using `git init` inside the folder. After, use `git remote add origin {origin}`
    - you can use `git remote -v` to check repositories connected
    - You can connect to a repository with the included capabilities of VScode

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

- After making some changes, you can use `git -status` to show you files updated or created. **IT IS ALWAYS A GOOD IDEA TO USE STATUS BEFORE COMMITTING ANYTHING.**
    - Hit the **Q** key when wanting to exit from a view, like a long diff
- When creating new files, using the `add` command will let you *track* changes for them to be committed.
    - To track all the files, you can use for brevity `git add .` 
- You can commit your messages with `git commit -m "Some message"`.
    - The message is mandatory, and should include the **why or what**.
    - You can add an extended description by something like `git commit -m "Main message" -m "Another message"`
- You can also use `git commit -am "commit message"` and skip the `git add` in case you only modified files 

## Git Push

- The commit still only saves the changes locally, to put it live use `git push origin main`.
    - **origin** is a keyword used by git to know the location of the local repository
    - **master** is the *branch* we want to push
- To prevent writing that all the time, you can use `git push -u origin master` to set the default and just use `git push` next time

## Git Branching

**Master Branch** is the naming convention for the main branch on the repository, also called **main**.

You can commit to a different branch to separate and organize code for different purposes like features and debugging. Branches will be independent of each other until they are merged.

- `git branch` wil show you the different branches
- `git checkout -b {name}` wil create a new branch with that name. It is common to use an issue or ticket number for this.
- to change back to the master branch, you can use `git checkout {name}`
    - You can use **tab** for autocompletion, like for a branch *feature-241231* you can start with **fea..**, but also with **241231...** 
- If you make changes, add them, and commit them in one branch, you can see that those same changes won't be on the other branch when you change
- You can check the differences between branches with `git diff {other branch}`
- It is **important to commit changes before changing branches**
- You can merge them right away, but is common to create a pull request when working on a team
     - On Github you can create a pull request, here you can see a conversation, commits, checks and of course, merge the branches. **Remember to pull locally with git pull when changing back to local**
- Yo don't reuse branches you have merged, using `git branch -d {branch}`
    - In big projects it is common to have more branches for merging different code before merging to master like `dev` or `debug`
- To merge them on the command line, you can use `git merge {branch-name}` in order to merge the branch-name into the current branch
    - Locally, it is common to merge the `master` branch into your modification, as it is common the `master` branch gets modified along the way

### Merge conflicts

- If there is a conflict, you can manage it by checking the file and it will look like this

```
    <<<<<<< HEAD
    current changes in your branch
    =======
    changes from other branch
    >>>>>>> other branch
```

- A good code editor will include options to manage the conflicts. After managing the merge conflict, you need to do another commit, of course, changes will only be done on the branch you are working on.

## Undoing 

- To undo changes to be committed you can use `git reset` or `git reset {file}`
- To undo the last commit, you can use `git reset HEAD~1` 
    - `HEAD` is a pointer that references the last commit, so with the `~1` it goes back one commit further.
    - This just undoes the commit, but the changes will still be there
- In order to undo more commits, you can search the commits by there hash with `git log`, to undo you can do `git reset {hash}`
    - You can scroll with the space-bar through the commits and exit with 'q'
- To **delete** the changes, you can use `git reset --hard hash`

# [VSCode Git Integration](https://code.visualstudio.com/docs/introvideos/versioncontrol)

After opening a folder (`Ctrl+K Ctrl+O`), you can initialize a repository in Source Control Panel (`Ctrl+Shift+G`)
    - Remember you can navigate the entirety of buttons there with the arrow keys, tab, enter and space.
- To rename a branch, you can use the `Git: Rename Branch...` on the Command Palette (`Ctrl+Shift+P`)
- You can see on the Source Control Panel and the Explorer Panel a letter on the side representing the status of the file, like U for untracked.
- You can see on the text gutter a line representing modified, added or deleted lines 
    - To view the diff preview, you can **click on the file** on the Source Control Panel, to view it on a single view select **"more actions..."** on the Window top bar and select **"Inline View"**

## To research

- Commands to send and download updates are `git push` and `git pull`
- merge`, `git switch` and `git restore --source [hash] [file]`
Commands git status, add, commit, push, diff, restore, branch, merge, hash, checkout, init
- How to use git with Visual Studio Code
- [Pull Requests on VScode](https://www.youtube.com/watch?v=LdSwWxVzUpo)
