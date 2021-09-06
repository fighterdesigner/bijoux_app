const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    icon: 'images/Tray.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.maximize();
  var menu = Menu.buildFromTemplate([

    {
    
      label: 'Menu',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        {
          label:'Exit',
          click() { 
            app.quit() 
        }
        },
      ]

    },
   
    {
    
      label: 'Dashboard',
      submenu: [
        {
          label:'Dashboard',
          click() { 
            win.loadFile('dashboard.html');
        }
        },
       
      ]

    },

    {
    
      label: 'Gestion des frais',
      submenu: [
        {
          label:'Gestion des frais',
          click() { 
            win.loadFile('frais.html');
        }
        },
       
      ]

    },

    {
      label: 'Articles',
      submenu: [
          {
            label:'Catégorie',
            click() { 
              win.loadFile('prod_catig.html');
          }
        },
          {
            label:'Ajouter un article',
            click() { 
              win.loadFile('index.html');
          }
        },

        {
          label:'Liste des articles',
          click() { 
            win.loadFile('liste_produits.html');
        },
        
      },
      {
        label:'Gestion des lots',
        click() { 
          win.loadFile('gestion_lots.html');
      },
      
    },
    {
      label:'Gestion de stock initiale',
      click() { 
        win.loadFile('stock_initiale.html');
    },
    
  }
       
          
      ]
  },
    {
    
      label: 'Clients',
      submenu: [
        {
          label:'Ajouter un client',
          click() { 
            win.loadFile('ajout_client.html');
        }
        },
        {
          label:'Liste des clients',
          click() { 
            win.loadFile('liste_client.html');
        }
        },
      ]

    },
    //{
      //label: 'Fournisseur',
      //submenu: [
      //  {
        //  label:'Ajouter un fournisseur',
        //  click() { 
        //    win.loadFile('ajout_fournisseur.html');
       // }
       // },
       // {
        //  label:'Liste des fournisseurs',
        //  click() { 
         //   win.loadFile('liste_fournisseur.html');
     //   }
     //   },
     // ]
    //},
   // {
    
      //label: 'Types de ventes',
       //  click() { 
        //    win.loadFile('ajout_type_vente.html');
       // }
    //},
    {
    
      label: 'Ventes',
      submenu: [
        {
          label:'Ajouter une vente',
          click() { 
            win.loadFile('ajout_cmd.html');
        }
        },
        {
          label:'Mes ventes',
          click() { 
            win.loadFile('liste_cmd.html');
        }
        },
      ]

    },
   
    {
    
      label: 'Atelier',
      submenu: [
        {
          label:'Matière première',
          click() { 
            win.loadFile('ajout_atelier.html');
        }
        },
        {
          label:'Gestion financiére',
          click() { 
            win.loadFile('ajout_finance.html');
        }
        },
        {
          label:'Réception de produit finale',
          click() { 
            win.loadFile('ajout_produit_fiscale.html');
        }
        },
      ]
    },

    {
    
      label: 'Gestion de stock',
      submenu: [
        {
          label:'Gestion de stock',
          click() { 
            win.loadFile('gestion_stock.html');
        }
        },
       
     
      ]
    },

   
])
Menu.setApplicationMenu(menu); 
  
  win.loadFile('dashboard.html');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



