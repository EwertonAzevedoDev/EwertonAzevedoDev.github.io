let experiencias = [
    {
        "empresa": "BPA Technologies",
        "cargo": "Desenvolvedor RPA",
        "periodo": "(09/2020 - 09/2021)",
        "descricao":"Desenvolvi automações que acessavam planilhas, sites, programas de terceiros e fazia o dashboards dessas automações para acompanhamento do desempenho da automação, ensinei colegas iniciantes como utilizar algumas ferramentas da empresa e auxiliei no desenvolvimento de várias automações."
    },
    {
        "empresa": "Yellow Lamp",
        "cargo": "Desenvolvedor back-end",
        "periodo": "(08/2019 - 03/2020)",
        "descricao":"Participei de alguns projetos já em andamento, tais como, sistema de entrega, sistema de loja virtual e sistemas mais avançados utilizando API de terceiros. Participei do desenvolvimento de um projeto grande de pesquisa e avaliação de restaurantes onde fiquei responsável integralmente pelo back-end desenvolvido em PHP utilizando o framework Laravel. E desenvolvi uma página web com painel administrativo para inserção de conteúdo dinâmico."
    },
    {
        "empresa": "SVMA",
        "cargo": "Estagiário de T.I",
        "periodo": "(04/2019 - 08/2019)",
        "descricao":"Durante o período estagiado utilizei o Linux para a configuração de um ambiente Web. Tive contato com o método Scrum e a plataforma Trello para organização de projetos, realizei estudos dos frameworks Drupal e Wordpress e implementei o sistema GLPI no servidor de testes para homologação do mesmo."
    }     
]
console.table(experiencias)
let jobs = document.getElementById("jobs")

experiencias.forEach((element) =>{
    let dt = document.createElement("dt")
    let span = document.createElement("span")
    let dd = document.createElement("dd")
    let jobtitle = document.createTextNode(element.empresa + " - " + element.cargo + " " + element.periodo)
    let jobDescription = document.createTextNode(element.descricao)
    span.classList.add("jobtitle")    
    span.appendChild(jobtitle)
    dd.appendChild(jobDescription)
    dt.appendChild(span)
    jobs.appendChild(dt)
    jobs.appendChild(dd)
})


