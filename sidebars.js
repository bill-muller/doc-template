module.exports = {
    docs: [
        {
            type: "doc",
            id: "index"
        },
        {
            type: "category",
            label: "З чого почати",
            collapsible: true,
            collapsed: false,
            link: {
                type: "doc",
                id: "how-to-start/overview"
            },
            items: [
                {
                    type: "category",
                    label: "Облікові дані",
                    collapsible: true,
                    collapsed: false,
                    link: {
                        type: "doc",
                        id: "how-to-start/credentials/overview"
                    },
                    items: [
                        "how-to-start/credentials/test-credentials",
                        "how-to-start/credentials/prod-credentials",
                    ]
                },  
                "how-to-start/api-format-request",
                "how-to-start/callbacks",
                "how-to-start/payment-page" 
            ]
        },
        {
            type: "category",
            label: "Довідники",
            collapsible: true,
            collapsed: true,
            link: {
                type: "generated-index",
                title: "Довідники",
                keywords: ['references'],
                image: "/img/docusaurus.png"
            },
            items: [
                "references/bank-codes",
                "references/crypto-currency-codes",
                "references/currency-codes",
                "references/error-codes",
                "references/language-codes",
                "references/region-codes",
                "references/reject-codes",
                "references/state-codes",
                "references/test-cards",
                "references/test-phones",
                "references/transaction-statuses"
            ]
        },
        {
            type: "category",
            label: "API роути",
            collapsible: true,
            collapsed: true,
            link: {
                type: "generated-index",
                title: "API роути",
                keywords: ['routes'],
                image: "/img/docusaurus.png"
            },
            items: [
                "routes/account-info",
                "routes/binance-pay-notify",
                "routes/cards-check",
                "routes/cards-whitelist-add",
                "routes/reports-check-report",
                "routes/reports-create",
                "routes/reports-list",
                "routes/reports-report",
                "routes/reports-report",
                "routes/service-list",
                "routes/service-service-id",
                "routes/transaction-cancel",
                "routes/transaction-create",
                "routes/transaction-currency-rate",
                "routes/transaction-find",
                "routes/transaction-issue-token",
                "routes/transaction-p2p-cancel",
                "routes/transaction-p2p-confirm",
                "routes/transaction-p2p-get-methods-list",
                "routes/transaction-p2p-get-recipient-card",
                "routes/transaction-pay",
                "routes/transaction-resend-giftcode",
                "routes/transaction-update",
                "routes/transaction-validate"
            ]
        },
        {
            type: "category",
            label: "Платіжні методи",
            collapsible: true,
            collapsed: false,
            link: {
                type: "doc",
                id: "services/overview"
            },
            items: [
                // Африка 
                {
                    type: "category",
                    label: "Африка",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Африка",
                        keywords: ['africa'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇨🇲 Камерун",
                            link: {
                                type: "generated-index",
                                title: " 🇨🇲 Камерун",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                {
                                    type: "category",
                                    label: "📥 PayIn",
                                    link: {
                                        type: "generated-index",
                                        title: "📥 PayIn",
                                        keywords: ['payin'],
                                        image: "/img/docusaurus.png"
                                    },
                                    items: [
                                        "services/fiat/africa/cameroon/pay-in/khipu",
                                        "services/fiat/africa/cameroon/pay-in/rapipago",
                                        "services/fiat/africa/cameroon/pay-in/binance-pay",
                                        "services/fiat/africa/cameroon/pay-in/crypto-fiat",
                                        "services/fiat/africa/cameroon/pay-in/gate-pay",
                                        "services/fiat/africa/cameroon/pay-in/on-ramp"
                                    ]
                                }, 
                                {
                                    type: "category",
                                    label: "📤 PayOut",
                                    link: {
                                        type: "generated-index",
                                        title: "📤 PayOut",
                                        keywords: ['payout'],
                                        image: "/img/docusaurus.png"
                                    },
                                    items: [
                                        "services/fiat/africa/cameroon/pay-out/khipu",
                                        "services/fiat/africa/cameroon/pay-out/rapipago",
                                        "services/fiat/africa/cameroon/pay-out/binance-pay",
                                        "services/fiat/africa/cameroon/pay-out/crypto-fiat",
                                        "services/fiat/africa/cameroon/pay-out/gate-pay",
                                        "services/fiat/africa/cameroon/pay-out/on-ramp"
                                    ]
                                } 
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇨🇬 Гана",
                            link: {
                                type: "generated-index",
                                title: " 🇨🇬 Гана",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/gana/payin",
                                "services/fiat/africa/gana/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇨🇮 Кот-д'Івуар",
                            link: {
                                type: "generated-index",
                                title: " 🇨🇮 Кот-д'Івуар",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/ivory-сoast/payin",
                                "services/fiat/africa/ivory-сoast/payout"       
                            ]
                        },
                        {
                            type: "category",
                            label: "🇬🇭 Кенія",
                            link: {
                                type: "generated-index",
                                title: " 🇬🇭 Кенія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/kenia/payin",
                                "services/fiat/africa/kenia/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇳🇬 Нігерія",
                            link: {
                                type: "generated-index",
                                title: " 🇳🇬 Нігерія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/nigeria/payin",
                                "services/fiat/africa/nigeria/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇿🇦 Південна Африка",
                            link: {
                                type: "generated-index",
                                title: " 🇿🇦 Південна Африка",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/south-africa/payin",
                                "services/fiat/africa/south-africa/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇳🇬 Уганда",
                            link: {
                                type: "generated-index",
                                title: " 🇳🇬 Уганда",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/africa/uganda/payin",
                                "services/fiat/africa/uganda/payout"
                            ]
                        } 
                    ]
                }, 
                // Азія
                {
                    type: "category",
                    label: "Азія",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Азія",
                        keywords: ['azia'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇧🇩 Бангладеш",
                            link: {
                                type: "generated-index",
                                title: " 🇧🇩 Бангладеш",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/asia/bangladesh/payin",
                                "services/fiat/asia/bangladesh/payout"
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇮🇳 Індія",
                            link: {
                                type: "generated-index",
                                title: " 🇮🇳 Індія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/asia/india/payin",
                                "services/fiat/asia/india/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇵🇰 Пакистан",
                            link: {
                                type: "generated-index",
                                title: " 🇵🇰 Пакистан",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/asia/pakistan/payin",
                                "services/fiat/asia/pakistan/payout"
                            ]
                        }
                    ]
                }, 
                // Європа
                {
                    type: "category",
                    label: "Європа",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Європа",
                        keywords: ['europe'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇵🇱 Польща",
                            link: {
                                type: "generated-index",
                                title: " 🇵🇱 Польща",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/europe/poland/payin",
                                "services/fiat/europe/poland/payout"
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇵🇹 Португалія",
                            link: {
                                type: "generated-index",
                                title: " 🇵🇹 Португалія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/europe/portugal/payin",
                                "services/fiat/europe/portugal/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇺🇦 Україна",
                            link: {
                                type: "generated-index",
                                title: " 🇺🇦 Україна",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/europe/ukraine/payin",
                                "services/fiat/europe/ukraine/payout"
                            ]
                        }
                    ]
                },
                // Латинська Америка 
                {
                    type: "category",
                    label: "Латинська Америка",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Латинська Америка",
                        keywords: ['latina'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇦🇷 Аргентина",
                            link: {
                                type: "generated-index",
                                title: " 🇦🇷 Аргентина",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/argentina/payin",
                                "services/fiat/latina/argentina/payout"
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇧🇷 Бразилія",
                            link: {
                                type: "generated-index",
                                title: " 🇧🇷 Бразилія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/brasil/payin",
                                "services/fiat/latina/brasil/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇨🇱 Чилі",
                            link: {
                                type: "generated-index",
                                title: " 🇨🇱 Чилі",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/chile/payin",
                                "services/fiat/latina/chile/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇨🇴 Колумбія",
                            link: {
                                type: "generated-index",
                                title: " 🇨🇴 Колумбія",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/colombia/payin",
                                "services/fiat/latina/colombia/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇪🇨 Еквадор",
                            link: {
                                type: "generated-index",
                                title: " 🇪🇨 Еквадор",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/ecuador/payin",
                                "services/fiat/latina/ecuador/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇲🇽 Мексика",
                            link: {
                                type: "generated-index",
                                title: " 🇲🇽 Мексика",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/mexico/payin",
                                "services/fiat/latina/mexico/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇵🇾 Парагвай",
                            link: {
                                type: "generated-index",
                                title: " 🇵🇾 Парагвай",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/paraguay/payin",
                                "services/fiat/latina/paraguay/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇵🇪 Перу",
                            link: {
                                type: "generated-index",
                                title: " 🇵🇪 Перу",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/peru/payin",
                                "services/fiat/latina/peru/payout"
                            ]
                        },  
                        {
                            type: "category",
                            label: "🇺🇾 Уругвай",
                            link: {
                                type: "generated-index",
                                title: " 🇺🇾 Уругвай",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/latina/uruguay/payin",
                                "services/fiat/latina/uruguay/payout"
                            ]
                        }
                    ]
                },
                // СНГ
                {
                    type: "category",
                    label: "СНГ",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "СНГ",
                        keywords: ['sng'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇦🇿 Азербайджан",
                            link: {
                                type: "generated-index",
                                title: " 🇦🇿 Азербайджан",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/sng/azerbaijan/payin",
                                "services/fiat/sng/azerbaijan/payout"
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇰🇿 Казахстан",
                            link: {
                                type: "generated-index",
                                title: " 🇰🇿 Казахстан",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/sng/kazakhstan/payin",
                                "services/fiat/sng/kazakhstan/payout"
                            ]
                        },
                        {
                            type: "category",
                            label: "🇺🇿 Узбекистан",
                            link: {
                                type: "generated-index",
                                title: " 🇺🇿 Узбекистан",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/sng/uzbekistan/payin",
                                "services/fiat/sng/uzbekistan/payout"
                            ]
                        }
                    ]
                },
                // Інші країни
                {
                    type: "category",
                    label: "Інші країни",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Інші країния",
                        keywords: ['canada, turkey'],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "🇨🇦 Канада",
                            link: {
                                type: "generated-index",
                                title: "🇨🇦 Канада",
                                keywords: ['canada'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/other/canada/payin",
                                "services/fiat/other/canada/payout"
                            ]
                        }, 
                        {
                            type: "category",
                            label: "🇹🇷 Туреччина",
                            link: {
                                type: "generated-index",
                                title: " 🇹🇷 Туреччина",
                                keywords: ['routes'],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "services/fiat/other/turkey/payin",
                                "services/fiat/other/turkey/payout"
                            ]
                        }
                    ]
                }, 
                /*
                {
                   type: "category",
                    label: "Криптовалюта",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "services/crypto/overview"
                    },
                    items: [
                        "services/crypto/binance-pay",
                        "services/crypto/crypto-fiat",
                        "services/crypto/gate-pay",
                        "services/crypto/on-ramp"
                    ]
                }
                */
            ]   
        }
    ]
};
