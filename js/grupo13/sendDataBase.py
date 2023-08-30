##########################################################################
############# Script para el envio de datos a FireBase ####################
##########################################################################

# Import database module.
from firebase_admin import db
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from datetime import datetime
# instalar pip install firebase-admin
# Fetch the service account key JSON file contents
cred = credentials.Certificate('Ejecutar/arquitectura-grupo-13-firebase-adminsdk-4fxkj-d24d13e72f.json')
# Initialize the app with a None auth variable, limiting the server's access
firebase_admin.initialize_app(cred, {'databaseURL': 'https://arquitectura-grupo-13-default-rtdb.firebaseio.com'})

def sendDataFireBase(cpu_usage,memory_usage,disk_usage,Kbps_re):
    try:
        fecha = datetime.today().strftime('%Y-%m-%d')
        hora = datetime.today().strftime('%H:%M:%S')
        
        ref = db.reference('')
        posts_ref = ref.child('valores')
        new_post_ref = posts_ref.push()
        new_post_ref.set({
            'fecha': fecha,
            'hora': hora,
            'CPU':cpu_usage,
            'Memoria':memory_usage,
            'Disco':disk_usage,
            'Recepcion':Kbps_re,
        })
        print("Registro guardado")
    except  Exception as e:
        print(e)
        
#sendDataFireBase()
#sendDataFireBase(200)
