const courses = [
	{
		id: 1,
		title: "title no 01",
		thumbnail: "/images/courses/courses-1.jpg",
		instructor: {
			id: "parra126",
			name: "Parra Victoria",
		},
		featured: false,
		trending: true,
		popularity: false,
		tags: ["development", "design", "branding"],
		categories: {
			name: "development",
			slug: "development",
			icon: {
				iconOne: "/images/svg/development.svg",
				thumbnail: "/images/category/development.jpg",
			},
		},
	},
	{
		id: 2,
		title: "title no 02",
		thumbnail: "/images/courses/courses-2.jpg",
		instructor: {
			id: "maria126",
			name: "Maria Rose",
		},
		featured: true,
		trending: false,
		popularity: true,
		tags: ["business", "branding", "management"],
		categories: {
			name: "business",
			slug: "business",
			icon: {
				iconOne: "/images/svg/business.svg",
				thumbnail: "/images/category/business.jpg",
			},
		},
	},
	{
		id: 3,
		title: "title no 03",
		thumbnail: "/images/courses/courses-3.jpg",
		instructor: {
			id: "maria126",
			name: "Maria Rose",
		},
		featured: true,
		trending: false,
		popularity: true,
		tags: ["business", "branding", "management"],
		categories: {
			name: "business",
			slug: "business",
			icon: {
				iconOne: "/images/svg/business.svg",
				thumbnail: "/images/category/business.jpg",
			},
		},
	},
];

// all unique tag list
/* const uniqueTag = [...new Set(courses.map(item => {
	return item.tags;
}).flat())]

console.log(uniqueTag); */

// all unique tag list
/* const tags = courses.map(item => {
	return item.tags;
}).flat()

// console.log(tags);

const counts = {}
tags.forEach( (item) => {
	counts[item] = (counts[item] || 0) + 1
})

// console.log(counts);

const ar = []
for (const key in counts) {
    ar.push({
		name: key,
		value: counts[key]
	})
}
console.log(ar); */

// all unique category list
/* const categories_u = [...new Set(courses.map(item => {
	return item.categories.name;
}).flat())]

const cat = courses.map((course) => {
	return course.categories.name
})

const counts = {}
cat.forEach( (item) => {
	counts[item] = (counts[item] || 0) + 1
})
console.log(counts); */

// array object to value count
/* const categories = courses.map((cat) => cat.categories);
const cats = [];
categories.forEach((cat) => {
	const index = cats.findIndex((a) => a.slug === cat.slug);
	if (index === -1) {
		cats.push({ ...cat, count: 1 });
	} else {
		cats[index] = {
			...cats[index],
			count: cats[index].count + 1,
		};
	}
});
console.log(cats); */

// array to value count
/* const tags = courses.map((course) => course.tags).flat();
const tagsWithObjectArray = [];
tags.forEach((tag) => {
	const index = tagsWithObjectArray.findIndex((i) => i.name === tag);
	if (index === -1) {
		tagsWithObjectArray.push({ name: tag, count: 1 });
	} else {
		tagsWithObjectArray[index] = {
			...tagsWithObjectArray[index],
			count: tagsWithObjectArray[index].count + 1,
		};
	}
});
console.log(tagsWithObjectArray); */

/* const greet = function (greetings) {
	return function (name) {
		console.log(`${greetings} - ${name}`);
	};
};

const res = greet("Hello");
res("Bangladesh"); */

/* const greet = (greetings) => (name) => {
	console.log(`${greetings} ----- ${name}`);
};

const res = greet("Hey");
res("Mr Perfect");
 */

const numbers = [2, 5, 8, 40, 6]

var total = 0;
for(var i = 0; i < numbers.length; i++) {
	total += numbers[i];
	// console.log(total, numbers[i]);
}
// console.log(total);

let result = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(result);

let newTotal = 0;
numbers.forEach(num => newTotal += num);

// console.log(newTotal);


let res = []

for(let i = 0; i < numbers.length; i++) {
	res.push(numbers[i] * 2)
}
// console.log(res);

const titleGenerator = function(title) {

	const capitalize = str => str[0].toUpperCase() + str.slice(1)

	const accept = ['but', 'too']

	const titleCase = title.toLowerCase().split(' ').map(el => (accept.includes(el) ? el : capitalize(el))).join(' ')

	return capitalize(titleCase);
}
console.log(titleGenerator("this is LONG title but not too Long"));