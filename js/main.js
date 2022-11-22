"use strict";

const { createApp } = Vue

  createApp({
    data() {
      return {
        
        currentContact: 0,
        currentMessage: "",
        searchedLetters: "",
        
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        formattedDate: "16:15",
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        formattedDate: "16:30",
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        formattedDate: "16:30",
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        formattedDate: "16:35",
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        formattedDate: "10:10",
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        formattedDate: "10:20",
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        formattedDate: "16:15",
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        formattedDate: "15:51",
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        formattedDate: "15:30",
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        formattedDate: "15:50",
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        formattedDate: "15:51",
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        
      }
    },


    methods:{

        selectContactClick(i){
            this.currentContact = i;
        },

        newMessage(){
            
            let today = new Date();
            
            let newMessage = {
                formattedDate: today.getHours() + ":" + today.getMinutes(),
                message: this.currentMessage,
                status: 'sent'
            }
            
           this.contacts[this.currentContact].messages.push(newMessage);
           this.currentMessage = "";

           setTimeout(() => { 

            let messageBack = {
                formattedDate: today.getHours() + ":" + today.getMinutes(),
                message: "ok",
                status: 'received'
            }

            this.contacts[this.currentContact].messages.push(messageBack);
        }, 1000);
        },

        contactSearch(){

            return this.contacts.filter(contact => {
                if(contact.name.toLowerCase().includes(this.searchedLetters.toLowerCase())){
                    contact.visible = true;
                }else{
                    contact.visible = false;
                }
            })
    
        },
    

    }
}).mount('#app')