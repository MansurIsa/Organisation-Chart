
const faPlus = document.querySelectorAll(".fa-plus");
const list = document.querySelector('.parent_categories');

for (let i = 0; i < faPlus.length; i++) {


    faPlus[i].addEventListener("click", function () {

        let parentCategory = document.createElement('li');

        parentCategory.classList.add('parent_category');


        let category = document.createElement('a');
        category.classList.add('category');
        category.textContent = `Category ${list.children.length + 1}`;
        parentCategory.appendChild(category);
        let tools = document.createElement('div');
        tools.classList.add('tools');
        let plus = document.createElement('i');
        plus.className = 'fas fa-plus';
        let pen = document.createElement('i');
        pen.className = 'fas fa-pen';
        let times = document.createElement('i');
        times.className = 'fas fa-times';
        tools.appendChild(plus);
        tools.appendChild(pen);
        tools.appendChild(times);
        parentCategory.appendChild(tools);


        list.appendChild(parentCategory);



    });

}


const faTimes = document.querySelectorAll(".fa-times");

for (let i = 0; i < faTimes.length; i++) {
    faTimes[i].addEventListener("click", function () {
        this.parentElement.parentElement.remove();
    })
}
