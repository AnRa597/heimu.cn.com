document.addEventListener('DOMContentLoaded', function() {  
    var links = document.querySelectorAll('.page-link');  
  
    links.forEach(function(link) {  
        link.addEventListener('click', function(e) {  
            e.preventDefault(); // 阻止链接的默认行为  
  
            // 模拟页面创建过程  
            // 在真实应用中，这里可能是发送AJAX请求到服务器  
            console.log('页面 ' + this.textContent + ' 被创建');  
  
            // 改变链接的类名，触发CSS颜色变化  
            this.classList.add('created');  
  
            // 可选：在页面上显示一些反馈，如创建成功的信息  
            document.getElementById('created-status').textContent = '页面 ' + this.textContent + ' 已创建！';  
  
            // 如果不再需要链接，可以阻止再次点击  
            // this.removeEventListener('click', arguments.callee, false);  
        });  
    });  
});