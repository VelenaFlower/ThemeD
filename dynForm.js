"use strict"
var array=[
    {p: "Для внесения вашего сайта в каталог, заполните форму:", name: "form"},
    {label:"Разработчики:",type:"text",name:"author",required:"true",class:"form-control"},
    {label:"Название сайта:",type:"text",name:"title",required:"true",class:"form-control"},
    {label:"URL сайта:",type:"text",name:"site",required:"true",class:"form-control"},
    {label:"Дата запуска сайта:",type:"text",name:"startdate",required:"true",class:"form-control"},
    {label:"Посетителей в сутки:",type:"text",name:"persons",required:"true",class:"form-control"},
    {label:"E-mail для связи:",type:"email",name:"title",required:"true",class:"form-control"},
    {label:"Рубрика каталога:",type:"select",name:"name",options:[{value:"1",text:"здоровье"},{value:"2",text:"уют"}, {value:"3",text:"бытовая техника"}],class:"form-control"},
    {label:"Размещение:",type:"radio",name:"public",options:[{value:"1",text:"бесплатное "},{value:"2",text:"платное"},{value:"3",text:"VIP"}],class:"form-control"},
    {label:"Разрешить отзывы",type:"checkbox",name:"comments",checked:"true",class:"form-control"},
    {label:"Описание сайта:",type:"textarea",name:"article",class:"form-control"},
    {value:"Опубликовать",type:"submit"}
];

function d1Form(arr,form) {
    if(arr) {
        arr.forEach(d1FormInput);
    }
    function d1FormInput(element, index, array) {
        if(element.name=="form") {
            var NewTagElement=document.createElement('p');
            var NewTextElement=document.createTextNode(element.p);
            NewTagElement.appendChild(NewTextElement);
            form.appendChild(NewTagElement);
        }

        if(element.type=="tel" || element.type=="email" ||  element.type=="text"){
            var NewTagElement=document.createElement('p');
            var NewLabelElement=document.createElement('label');
            var NewInputElement=document.createElement('input');
            var NewTextElement=document.createTextNode(element.label);
            NewInputElement.type=element.type;
            NewInputElement.name=element.name;

            if(element.required){
                NewInputElement.required=true;
            }

            NewInputElement.classList.add(element.class);
            NewLabelElement.appendChild(NewTextElement);
            NewLabelElement.appendChild(NewInputElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }

        if(element.type=="submit"){
            var NewTagElement=document.createElement('p');
            var NewInputElement=document.createElement('input');
            NewInputElement.type=element.type;
            NewInputElement.value=element.value;

            NewInputElement.classList.add("btn","btn-primary");
            NewTagElement.appendChild(NewInputElement);
            form.appendChild(NewTagElement);


        }

        if(element.type=="select"){

            var NewTagElement=document.createElement('p');
            var NewLabelElement=document.createElement('label');
            var NewTextElement=document.createTextNode(element.label);
            var NewSelectElement=document.createElement('select');
            NewSelectElement.name=element.name;
            NewSelectElement.classList.add(element.class);

            NewLabelElement.appendChild(NewTextElement);

            for(var i=0;i<element.options.length;i++){
                var NewOptionElement=document.createElement('option');
                NewOptionElement.value=element.options[i].value;
                var NewTextElement=document.createTextNode(element.options[i].text);
                NewOptionElement.appendChild(NewTextElement);

                NewSelectElement.appendChild(NewOptionElement);
            }
            NewLabelElement.appendChild(NewSelectElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);

        }
        if(element.type=="radio"){
            var NewTagElement=document.createElement('p');
            var NewLabelElement=document.createElement('label');
            var NewTextElement=document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);
            NewTagElement.appendChild(NewLabelElement);

            for( var i=0;i<element.options.length;i++){

                var NewRadioElement=document.createElement('input');
                NewRadioElement.value=element.options[i].value;
                NewRadioElement.type="radio";
                NewRadioElement.name=element.name;
                var NewLabelRElement=document.createElement('label');
                var NewTextElement=document.createTextNode(element.options[i].text);
                NewLabelRElement.appendChild(NewRadioElement);
                NewLabelRElement.appendChild(NewTextElement);
                NewTagElement.appendChild(NewLabelRElement);

            }
            form.appendChild(NewTagElement);
        }
        if(element.type=="checkbox"){
            var NewTagElement=document.createElement('p');
            var NewLabelElement=document.createElement('label');
            var NewTextElement=document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);

            var NewCheckElement=document.createElement('input');
            NewCheckElement.type="checkbox";
            NewCheckElement.name=element.name;
            (element.checked)?NewCheckElement.checked="true":NewCheckElement.checked="false";
            NewLabelElement.appendChild(NewCheckElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }
        if(element.type=="textarea"){
            var NewTagElement=document.createElement('p');
            var NewLabelElement=document.createElement('label');
            var NewTextElement=document.createTextNode(element.label);
            NewLabelElement.appendChild(NewTextElement);

            var NewTextareaElement=document.createElement('textarea');
            NewTextareaElement.name=element.name;
            NewTextareaElement.classList.add(element.class);
            NewLabelElement.appendChild(NewTextareaElement);
            NewTagElement.appendChild(NewLabelElement);
            form.appendChild(NewTagElement);
        }


    }

}


d1Form(array,formSite);