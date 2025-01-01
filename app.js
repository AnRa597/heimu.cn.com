const express = require('express');  
const path = require('path');  
const app = express();  
const PORT = 3000;  
 
// 设置静态文件目录  
app.use(express.static(path.join(__dirname, 'public')));  
 
// 为根路径设置一个路由  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  
});  
 
app.listen(PORT, () => {  
    console.log(`Server running on http://localhost:${PORT}`);  
});
