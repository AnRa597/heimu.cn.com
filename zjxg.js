// 加载页面时，从LocalStorage中读取更改记录并显示  
window.onload = function() {  
    loadChanges();  
};  
  
// 添加更改到LocalStorage并更新页面  
function addChange() {  
    const input = document.getElementById('changeInput');  
    const change = input.value.trim();  
  
    if (change) {  
        // 获取当前时间戳作为更改的唯一标识符  
        const timestamp = new Date().toISOString();  
        const changes = loadChanges();  
        changes.unshift({ time: timestamp, content: change }); // 将新更改添加到数组开头  
  
        // 将更改数组保存回LocalStorage  
        localStorage.setItem('changes', JSON.stringify(changes.slice(0, 10))); // 假设我们只保留最近的10条更改  
  
        // 更新页面显示  
        updateChangesDisplay(changes);  
  
        // 清空输入框  
        input.value = '';  
    }  
}  
  
// 从LocalStorage加载更改记录  
function loadChanges() {  
    const changesStr = localStorage.getItem('changes');  
    return changesStr ? JSON.parse(changesStr) : [];  
}  
  
// 更新页面上的更改记录显示  
function updateChangesDisplay(changes) {  
    const changeLog = document.getElementById('changeLog');  
    changeLog.innerHTML = ''; // 清空现有的列表项  
  
    changes.forEach(change => {  
        const listItem = document.createElement('li');  
        listItem.textContent = `${new Date(change.time).toLocaleTimeString()} - ${change.content}`;  
        changeLog.appendChild(listItem);  
    });  
}