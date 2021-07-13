const navigateTo = url => {
    history.pushState(null,null,url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/experience", view: () => console.log("Viewing Experience") },
        { path: "/education", view: () => console.log("Viewing Education") },
    ];

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };

    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //in case a person adds the incorrect URL
    //it must be set to true
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match.route.view());
};

//this ensures we can use the back button aka going back thru history
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        
    });

    router();
});
