/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
	const config = {
		apiKey: "AIzaSyCHhmPm3sPNgDco-ley8-pvS8-qOjwO30I",
		authDomain: "arquitectura-grupo-13.firebaseapp.com",
		databaseURL: "https://arquitectura-grupo-13-default-rtdb.firebaseio.com",
		projectId: "arquitectura-grupo-13",
		storageBucket: "arquitectura-grupo-13.appspot.com",
		messagingSenderId: "114150102470",
		appId: "1:114150102470:web:3fe36e460c771fc0e88ec7",
		measurementId: "G-VMSQWRJBTX"
	};
	firebase.initializeApp(config); //inicializamos firebase
	var db = firebase.database();
	var coleccionProductos = db.ref().child("valores");
	var dataSet = []; //array para guardar los valores de los campos inputs del form
	var table = $("#tablaValores").DataTable({
		pageLength: 5,
		lengthMenu: [
			[5, 10, 20, -1],
			[5, 10, 20, "Todos"],
		],
		data: dataSet,
		columnDefs: [
			{
				targets: [0],
				visible: false, //ocultamos la columna de ID que es la [0]
			},
		],
	});

	coleccionProductos.on("child_added", (datos) => {
		$("#tablaValores").delay("slow").fadeIn();
		dataSet = [
			datos.key,
			datos.child("fecha").val(),
			datos.child("hora").val(),
			datos.child("CPU").val(),
			datos.child("Memoria").val(),
			datos.child("Disco").val(),
			datos.child("Recepcion").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});

