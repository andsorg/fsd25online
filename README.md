# fsd25online


Here you go:
1. Git Install
2. Git configure
    git config --global user.name "Your Name"
    git config --global user.email "your@email.com"

3. Basic Git Workflow
    git init
    git add file.txt / git add .
    git commit -m "Message"
    git log – View history
    git status – See current state


4. Branches:
    git branch feature
    git checkout feature
    # or
    git switch -c feature
    git merge feature


5. Merge Conflicts:
    git checkout -b feature-1
    # edit file
    git add .
    git commit -m "Added feature-1"
    git checkout main
    git merge feature-1

6. Pull Requests:
    git fetch       # Gets latest changes
    git pull        # Fetch + Merge

7. Best Practices:
    Commit Often & Write Clear Messages
    Don’t Commit Secrets or .env
    Use Feature Branches
    Pull Before Push
    Use Pull Requests for Code Reviews

