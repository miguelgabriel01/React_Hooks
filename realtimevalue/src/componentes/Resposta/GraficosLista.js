import React from 'react'
import GraficoMedia from '../dashboards/GraficoMedia';
import '../Resposta/GraficosLista.css';

export default function GraficosLista() {
  return (
    <div>
      <section className="dashboard">
        <div id="caixagrafico" style={{width:'650px',height:'100%'}}></div>
        <div className="panoramas">
        <div id="caixagrafico"></div>
        <div id="caixagrafico"></div>
        </div>
      </section>
    </div>
  )
}
