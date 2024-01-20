replace to="  to  href="
replace img to <Image
replace class to className


Three ways to make a dynamic  page -- like lecture page :

1. no customization: no own page ==> use template

   <Link href="/find-jobs?q=lecturer">Lecturer</Link>
   
2. semi customization: no own page ===> use template, 
data= [{
    "Name": "lecturer",
    "Content": "this is content specially for lecturer"
   },
]

import data

const { content } = data.find(item => item.Name === urlparamter);

<Link href="/find-jobs?q=urlparamter">Lecturer</Link>


3. full customization: create own page

<JobSearchBox q="lecturer" />
<SearchResults q={{ q: 'lecturer' || 0 }} />

<Link href="/lecturer">Lecturer</Link>