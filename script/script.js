/**
 * Created by Dmitriy on 23.03.2016.
 */
var addDom ={

    addh1: function(){
        var element = document.createElement('h1');
        element.classList.add('title');
        element.innerHTML = 'Тест по программированию';
        var body = document.querySelector('body');
        body.appendChild(element);
    },


    addform:function(){
        var element = document.createElement('form');
        element.setAttribute('method', 'post');
        element.setAttribute('action', '#');
        var h1 = document.querySelector('body');
        h1.appendChild(element);

    },


    adddiv: function(){
        for(var i=1;i<4;i++) {
            var element = document.createElement('div');
            var element_p = document.createElement('p');
            element.classList.add('blockquestion');
            element_p.classList.add('namequestion');
            element_p.innerHTML =i+ '. Вопрос №'+i;
            var form = document.querySelector('form');
            form.appendChild(element);
            var div = document.querySelectorAll('div');
            div[i-1].appendChild(element_p);
        }
    },


    addp: function() {
        for (var i=0;i<3;i++) {
            for (var j = 0; j < 3; j++) {
                var element_p = document.createElement('p');
                element_p.classList.add('questionTitle');
                var div = document.querySelectorAll('div');
                div[i].appendChild(element_p);
            }

        }
    },


    addchek: function() {
        for (var i = 0; i < 9; i++) {
            var element = document.createElement('input');
            element.classList.add('question');
            element.setAttribute('type', 'checkbox');
            var p_q = document.querySelectorAll('.questionTitle');
            p_q[i].insertBefore(element,p_q.children);
        }
    },


    addbutton:function(){
        var element = document.createElement('button');
        element.classList.add('button');
        element.setAttribute('type', 'submit');
        element.innerHTML = 'Проверить мои результаты';
        var form = document.querySelector('form');
        form.appendChild(element);
    },


    span:function(){
        var j=0;
        for(var i=0;i<9;i++)
        {   j++;
            var element = document.createElement('span');
            var que= document.querySelectorAll('.questionTitle');
            element.innerHTML='Вариант ответа №' + j;
            que[i].appendChild(element);

            if(j==3)
                j=0;
        }
    }
};

addDom.addh1();
addDom.addform();
addDom.adddiv();
addDom.addp();
addDom.addchek();
addDom.span();
addDom.addbutton();