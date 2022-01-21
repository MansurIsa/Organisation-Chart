// const parentPlus = document.querySelector(".parent_plus");
// const parentCategories = document.querySelector(".parent_categories")
// const parentCategory = document.querySelector(".parent_category")



// parentPlus.addEventListener("click", function () {
//     // for(let i=0;i<parentCategory.length;i++){
//     //     parentCategories.appendChild(parentCategory[i])
//     // }
//     // parentCategories.appendChild(li)
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     ul.className = "parent_category";
//     const a = document.createElement("a");
//     a.className = "category";
//     li.appendChild(a);
//     ul.appendChild(li);
//     li.textContent = `Category ${parentCategories.childNodes.length}`

//     parentCategories.appendChild(parentCategory)

// });

const plus = document.querySelectorAll(".fa-plus");



const list = document.querySelector('.parentul')
const list1=document.querySelector('.childul')

for(let i=0; i<plus.length;i++){

plus[i].addEventListener("click", function () {

    // let parentCategory = document.createElement('ul')

    // parentCategory.classList.add('parent_category')

    // let li = document.createElement('li')

    // let category = document.createElement('a')
    // category.classList.add('category')
    // category.textContent = `Category ${list.children.length -1}`
    // li.appendChild(category)
    // let tools = document.createElement('div')
    // tools.classList.add('tools')
    // let plus = document.createElement('i')
    // plus.className = 'fas fa-plus'
    // let pen = document.createElement('i')
    // pen.className = 'fas fa-pen'
    // let times = document.createElement('i')
    // times.className = 'fas fa-times'
    // li.appendChild(plus)
    // li.appendChild(pen)
    // li.appendChild(times)
    // parentCategory.appendChild(li)



    // list.appendChild(parentCategory)

    let parentCategory = document.createElement('li');
    parentCategory.classList.add('parent_category');
    let category = document.createElement('a')
    category.classList.add('category')
    category.textContent = `Category ${list.children.length +1}`
    let tools = document.createElement('div')
    tools.classList.add('tools')
    let plus = document.createElement('i')
    plus.className = 'fas fa-plus'
    let pen = document.createElement('i')
    pen.className = 'fas fa-pen'
    let times = document.createElement('i')
    times.className = 'fas fa-times'
    tools.appendChild(plus)
    tools.appendChild(pen)
    tools.appendChild(times)
    parentCategory.appendChild(category);
    parentCategory.appendChild(tools)
    list.appendChild(parentCategory);


    // let parentSubCategory = document.createElement('li');
    // parentSubCategory.classList.add('parent_sub_category');
    // let subCategory = document.createElement('a')
    // subCategory.classList.add('sub_category')
    // subCategory.textContent = `Category ${list1.children.length +1}`
    // let tools = document.createElement('div')
    // tools.classList.add('tools')
    // let plus = document.createElement('i')
    // plus.className = 'fas fa-plus'
    // let pen = document.createElement('i')
    // pen.className = 'fas fa-pen'
    // let times = document.createElement('i')
    // times.className = 'fas fa-times'
    // tools.appendChild(plus)
    // tools.appendChild(pen)
    // tools.appendChild(times)
    // parentSubCategory.appendChild(subCategory);
    // parentSubCategory.appendChild(tools)
    // list1.appendChild(parentSubCategory);
});

}
