const items = [
    {
        "title": "Successful Negotiation: Master Your Negotiating Skills",
        "instructor": "Maya",
        "categories": {
            "name": "development",
            "icon": {
                "iconOne": "/images/svg/development.svg",
                "thumbnail": "/images/category/development.jpg"
            },
        },
        "featured": true,
        "trending": true,
        "popular": false
    },
    {
        "title": "Time Management Mastery: Do More, Stress Less",
        "categories": {
            "name": "business",
            "icon": {
                "iconOne": "/images/svg/business.svg",
                "thumbnail": "/images/category/business.jpg"
            },
        },
        "featured": true,
        "trending": false,
        "popular": true
    },
    {
        "title": "Angular–The Complete Guide (2020 Edition)",
        "categories": {
            "name": "art & design",
            "icon": {
                "iconOne": "/images/svg/art-design.svg",
                "thumbnail": "/images/category/art-design.jpg"
            },
        },
        "featured": false,
        "trending": true,
        "popular": false
    },
    {
        "title": "Consulting Approach to Problem Solving",
        "categories": {
            "name": "music",
            "icon": {
                "iconOne": "/images/svg/music.svg",
                "thumbnail": "/images/category/music.jpg"
            },
        },
        "featured": false,
        "trending": true,
        "popular": true
    },
    {
        "title": "The Business Intelligence Analyst Course 2020",
        "categories": {
            "name": "lifestyle",
            "icon": {
                "iconOne": "/images/svg/lifestyle.svg",
                "thumbnail": "/images/category/lifestyle.jpg"
            },
        },
        "featured": false,
        "trending": true,
        "popular": true
    },
    {
        "title": "Become a Product Manager | Learn the Skills & Get the Job",
        "categories": {
            "name": "teaching academy",
            "icon": {
                "iconOne": "/images/svg/teaching-academics.svg",
                "thumbnail": "/images/category/teaching-academics.jpg"
            },
        },
        "featured": false,
        "trending": true,
        "popular": false
    },
    {
        "title": "Become a Product Manager | Learn the Skills & Get the Job",
        "categories": {
            "name": "music",
            "icon": {
                "iconOne": "/images/svg/teaching-academics.svg",
                "thumbnail": "/images/category/teaching-academics.jpg"
            },
        },
        "featured": false,
        "trending": true,
        "popular": true
    }
]


const result = items.find(el => {
    return el.popular === true
})

console.log(result)