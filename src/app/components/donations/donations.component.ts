import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent  {


  focus: any;
  focus1: any;
  tipoDonacion: string = '';

  activeTab: 'pse' | 'credito' | 'puntoPago' = 'pse';

  banks: string[] = ['Bancolombia', 'Davivienda', 'Banco de Bogotá', 'Nequi', 'BBVA'];
  personTypes: string[] = ['Persona Natural', 'Persona Jurídica'];

  cuotas: number[] = [1, 2, 3, 6, 12];
  selectedBank: string = '';
  selectedPersonType: string = '';
  selectedPoint: string = '';
  paymentPoints: string[] = ['Efecty', 'Paga Todo'];

  dias: { nombre: string, actividades: string[] }[] = [
    { nombre: 'Lunes', actividades: [
        'Oración – 9:00 a.m. A 11:00 a.m.',
        'Sembrar para Cosechar – 6:30 p.m.',
    ] },
    { nombre: 'Martes', actividades: [
      'Oración – 9:00 a.m. A 11:00 a.m.',
      'Oración – 9:00 a.m. A 11:00 a.m.',
    ] },
    {
      nombre: 'Miércoles', actividades: [
        'Oración – 9:00 a.m. A 11:00 a.m.',
        'Servicio – 7:00 p.m.',
      ]
    },
    {
      nombre: 'Jueves', actividades: [
        'Ayuno – 8:30 a.m. A 11:00 a.m.',
        'Instituto Bíblico – 6:00 p.m. A 8:00 p.m.',
      ]
    },
    {
      nombre: 'Viernes', actividades: [
        'Oración – 9:00 a.m. A 11:00 a.m.',
      ]
    },
    { nombre: 'Sábado', actividades: [
      'Reunión de jóvenes – 4:30 p.m.',
      'Reunión de Damas – 5:00 p.m.',
    ] },
    {
      nombre: 'Domingo', actividades: [
        'Culto de adoración – 9:00 a.m.',
        'Escuela dominical – 10:30 a.m.',
      ]
    }
  ];



  opcionesDonacion = [
    { valor: 'diezmo', etiqueta: 'Diezmo' },
    { valor: 'ofrenda', etiqueta: 'Ofrenda' },
    { valor: 'donacion', etiqueta: 'Donación Especial' }
    
  ];

  tipoDocumento = [
    { valor: '1', etiqueta: 'Cédula' },
    { valor: '2', etiqueta: 'Tarjeta de Identidad' },
    { valor: '3', etiqueta: 'Cédula de Extranjería' },
    { valor: '3', etiqueta: 'NIT' }
  ]

}
