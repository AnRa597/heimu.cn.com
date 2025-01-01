function toggleGroup(groupId) {  
    var group = document.getElementById(groupId);  
    var list = group.querySelector('.navbox-list');  
    if (list.style.display === 'none') {  
        list.style.display = 'block';  
        group.querySelector('.navbox-toggle-icon').textContent = '-'; // 如果已经展开，则显示'-'  
    } else {  
        list.style.display = 'none';  
        group.querySelector('.navbox-toggle-icon').textContent = '+'; // 如果已经折叠，则显示'+'  
    }  
}  
  
// 为每个分组标题添加点击事件监听器  
document.querySelectorAll('.navbox-group-header').forEach(function(header) {  
    header.addEventListener('click', function() {  
        var groupId = this.closest('.navbox-group').id;  
        toggleGroup(groupId);  
    });  
});  
  
// 注意：上面的代码只是一个基本示例，并且假设每个分组标题旁边都有一个'.navbox-toggle-icon'元素。  
// 您可能需要根据您的HTML结构进行相应的调整。