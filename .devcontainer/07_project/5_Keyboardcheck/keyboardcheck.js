const inster=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    inster.innerHTML=`<div class='color'>
    <table>
        <tr>
            <td>key</td>
            <td>keycode</td>
            <td>code</td>
        </tr>
        <tr>
            <td>${e.key===" "?"space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>`
})