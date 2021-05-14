// I added the timeout function so the html with instructions shows up on the page before running the script
setTimeout(function () {
    let command = prompt('Enter a command:');

    const list = [];

    while (command !== 'quite') {
        if (command === 'list') {
            console.log('****** To Do List ******');
            for (const [index, item] of list.entries()) {
                console.log(`${index}: ${item}`);
            }
        } else if (command === 'new') {
            const todo = prompt('Enter todo:');
            list.push(todo);
            console.log(`*${todo}* has been added to the list`);
        } else if (command === 'delete') {
            const index = parseInt(prompt('Enter the index of the todo you want to delete:'));
            if (index < list.length) {
                console.log(`*${list.splice(index, 1)}* has been deleted`);
            }
        }
        command = prompt('Enter a command:').toLowerCase();
    }

}, 200)
