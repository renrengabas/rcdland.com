# rcdland.com
New website for RCD Land Inc

Intructions on How to Use Jekyll

1. Install Ruby (with DevKit)
   Run the installer:

✔ Check “Add Ruby to PATH”

✔ Select MSYS2 development toolchain when prompted

2. Install Jekyll and Bundler
Open Command Prompt or PowerShell and run:

"gem install jekyll bundler"

3. Create a New Jekyll Site

jekyll new new-site
cd new-site
bundle install

4. Add _layouts and _includes folders for boilertemplate and header/footer template

5. 'assets' folder should contain the following files source images, js scripts, and css styles.

6. Serve Your Site Locally Using:

"bundle exec jekyll serve"

Open your browser and go to:
http://localhost:4000


Always include these files on gitignore:
- _site
- .sass-cache
- .jekyll-cache
- .jekyll-metadata
- vendor
- Gemfile.lock

Launching Jekyll in new branch:

1. Open command prompt or powershell and run:

"bundle install"
"bundle exec jekyll serve"

