console.log(window.innerWidth)
let experiencias = [
    {
        "empresa": "BPA Technologies",
        "cargo": "Desenvolvedor RPA",
        "periodo": "(09/2020 - 09/2021)",
        "descricao":["Desenvolvi automações, utilizando Python, Auto Hotkey, Nodered e javascript, que capturavam e processavam dados de qualquer tipo de fonte Ex.: planilha, API, software legado, site, etc.",
                     "Desenhei dashboards dinânmicos utilizando o Grafana e MySQL para acompanhar o desempenho das automações desenvolvidas.",
                     "Configurei ambientes para a utilização das automações desenvolvidas.",
                     "Participei da migração de ambientes virtuais migrando mais de 150 automações.",
                     "Participei de reuniões com os clientes.",
                     "Corrigi automações defeituosas desenvolvidas por desenvolvedores antigos da empresa",
                     "Ensinei os colegas novatos a utilizar o framework da empresa tais como outras ferramentas e auxiliei no desenvolvimento de suas primeiras automações"
                    ]
    },
    {
        "empresa": "Yellow Lamp",
        "cargo": "Desenvolvedor back-end",
        "periodo": "(08/2019 - 03/2020)",
        "descricao":["Participei do desenvolvimento de um sistema web de buscas de restaurantes utilizando, PHP, Laravel, Angular e MongoDb.", 
                     "Participei do desenvolvimento de uma Api para integrar um sistema web feito em Wordpress com os dados dos clientes, utilizando Laravel, PHP e Angular.",
                     "Participei do desenvolvimento de um sistema web de Bazar de roupas que integrava varias unidades das lojas com o estoque, utilizando Angular e MongoDB",
                     "Participei do desenvolvimento de um sistema web de contratação de serviçoes que conectava o cliente ao prestador de serviço, utilizando Angular e Firebase",
                     "Participei do desenvolvimento de um sistema web de segurança com acesso as cameras e apis da central, utilizando Angular e MongoDB",
                     "Desenvolvi um sistema web com painel de controle para edição de conteudo da página utilizando, Laravel, PHP e MySQL",
                     "Participei de reuniões com os clientes para levantamento de requisito, homologação e entrega do projeto."
                    ]
    },
    {
        "empresa": "SVMA",
        "cargo": "Estagiário de T.I",
        "periodo": "(04/2019 - 08/2019)",
        "descricao":["Realizei diversas pesquisas sobre ferramentas e frameworks disponíveis para execução de um projeto interno",
                    "Participei do projeto de implementar uma intranet com sistema de abertura de chamados, utilizando GLPI",
                    "Configurei o ambiente de desenvolvimento e homologação em Linux",
                    "Participei de pesquisas internas para levantamento de requisitos para novos projetos internos",
                    "Participei de reuniões diárias utilizando o método ágil SCRUM"
                ]
    }     
]
console.table(experiencias)
let jobs = document.getElementById("jobs")

experiencias.forEach((element) =>{
    let dt = document.createElement("dt")
    let span = document.createElement("span")
    let dd = document.createElement("dd")
    let jobtitle = document.createTextNode(element.empresa + " - " + element.cargo + " " + element.periodo)    
    span.classList.add("jobtitle")    
    span.appendChild(jobtitle)
    element.descricao.forEach((e) => {
        let li = document.createElement("li")
        li.classList.add("jobdescription")
        let liText = document.createTextNode(e)
        li.appendChild(liText)
        dd.appendChild(li)
    })    
    dt.appendChild(span)
    jobs.appendChild(dt)
    jobs.appendChild(dd)
})


