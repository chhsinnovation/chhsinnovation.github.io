This is the GitHub.io presence for the CHHS Office of Innovation. This site houses information about the office, the official communications and outreach calendars, the playbook, and open source innovation places for collaboration.

Cohort 1 created the content and structure for the site during the Agile the Right Way workshop in June 2018. It was the first "project" the team did together and inspired most of the content on here.

Site construction: this is a github.io site using manually installed bootstrap 4 following the method outlined in https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-1/. Also critical in helping me build this site was the CSS and modern HTML for dinosaurs series by Peter Jang (https://medium.com/actualize-network/modern-html-explained-for-dinosaurs-65e56af2981 and https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525). The bootstrap documentation was critical as well (https://getbootstrap.com/docs/4.3/getting-started/introduction/). The CSS uses relative URL to ensure it finds it in both dev and production.

Attempts to install github pages themes in jekyll either didn't work or didn't have the look I wanted. Also, installing everything in github on a chromebook didn't let me do everything I needed to. I was able to get a terminal on my Chromebook but without a good editor (Atom) and github desktop it was kinda impossible. So, I used a Mac with the aforementioned tools and good ol' terminal to install all the gems and test until it was good to go.

Special folders: The variables scss file holds the code for the custom font color to match the logo. The call for to stylesheet in the default template uses relative url to ensure it works both locally and on github pages.

Adding an author - put the file name for the md file and the authors name in front matter both in lower case and it should auto populate the info and links.

To update the site, contributors merely need to add narratives for the engagements into the post folder. Staff profiles can go into the authors folder. Both can be written as markdown files, but html can be added too, if desired. The playbook is a separate repo and site built using the aforementioned techniques. Each method is a post, but no staff profiles are included in that repo.


