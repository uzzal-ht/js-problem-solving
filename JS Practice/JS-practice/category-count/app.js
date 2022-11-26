const array = [
	{
		id: 1,
		title: "title no 01",
		tags: ["development", "design", "branding"],
		categories: {
			name: "development",
			slug: "development",
		},
	},
	{
		id: 2,
		title: "title no 02",
		tags: ["business", "branding", "management"],
		categories: {
			name: "business",
			slug: "business",
		},
	},
	{
		id: 3,
		title: "title no 03",
		tags: ["business", "branding", "management"],
		categories: {
			name: "business",
			slug: "business",
		},
	},
];

/* let allTags = array.map((item) => {
	return item.tags
}).flat()

let obj = {}

allTags.forEach(item => {
	if(obj.hasOwnProperty(item)) {
		obj[item] = obj[item] += 1
	} else {
		obj[item] = 1
	}
})

console.log(obj); */


const allCategories = array.map((item) => {
	return item.categories
})

let finalData = []

allCategories.forEach(cat => {
	const index = finalData.findIndex(a => a.slug === cat.slug)

	if(index === -1) {
		finalData.push({...cat, count: 1})
	} else {
		finalData[index] = {
			...finalData[index],
			count: finalData[index].count +1
		}
	}
})


console.log(finalData);



