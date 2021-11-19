# Mary Beth Hunter - Personal Bio Site!

## [View Site :)]()

## [Loom video walkthrough!]()
## Get Started:


```javascript
 $ git clone git@github.com:marybethhunter/mbh-portfolio-site.git
 $ cd mbh-portfolio-site
```

## About the User
* This is a site a user can visit to learn more about me as a web developer. Whether it's a potential employer or something my mom can show off to her friends, everything about my web dev life is on this site. The site features a home page, an about page, a contact page, a technologies used page, and a page displaying all my projects. The projects have a button that the user can click to see more details about that specific project. There, they can see a description, a screenshot, and links to the repo and deployed site.


## Features: 
#### **Admin CRUD**: 
* As the administrator of this site, there are many things I have access to that regular users do not. I used Private Routes from React Router Dom to achieve this. I have full CRUD on the projects section. I can edit the about me and contact sections. Finally, I can add and delete any of the technology cards in that section. A regular site visitor can only view these sections.

#### **Material UI**
* One of my stretch goals for this project was to implement Material UI for styling, and I did. All non-admin components are from Material UI.

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/zCs2S1ZHDjoEUBenp9xCFN/portfolio-site?node-id=0%3A1)
* [Technical Flowchart](https://docs.google.com/presentation/d/1EJHvzHXvT1ABfpovTrdWO_zvVgtsZ6UwlxKUeESS8hk/edit?usp=sharing)
* [ERD](https://dbdiagram.io/d/6192bcd102cf5d186b5737e9)
* [Project Board](https://github.com/marybethhunter/mbh-portfolio-site/projects/1)

## Code Snippets:

```javascript
  <DivStyle style={{ backgroundColor: '#ffffff' }}>
    {user?.isAdmin && <Link to="/add-tech">Add New Tech</Link>}
      <Masonry columns={4} gap={50}>
        {techs.map((tech) => (
          <TechCard
            key={tech.firebaseKey}
            tech={tech}
            setTechs={setTechs}
            user={user}
          />
        ))}
      </Masonry>
  </DivStyle>
```

## Technology Used:
* Javascript
* React
* Firebase
* Postman
* Figma
* Axios
* Material UI
* Reactstrap
* Styled Components

## Screenshots:

## Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
