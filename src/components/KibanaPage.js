import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./KibanaPage.css"; // Assurez-vous de lier le bon fichier CSS

const KibanaPage = () => {
  const { datacenterId } = useParams(); // Récupère le paramètre de la route (datacenterId)
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    const iframe = document.createElement("iframe");

    // Vérifie le datacenter sélectionné et charge le bon dashboard
    if (datacenterId === "datacenter1") {
      iframe.src =
        "http://localhost:5601/app/dashboards#/view/fab3a750-d709-11ef-bf50-d35fa54ac01e?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2008-11-08T23:00:00.000Z',to:'2008-11-11T22:50:00.000Z'))&_a=(viewMode:edit)";
    } else if (datacenterId === "datacenter2") {
      iframe.src =
        "http://localhost:5601/app/dashboards#/view/ff498ed0-cbb3-11ef-bbfc-932b85a4781a?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'2014-12-31T23:00:00.000Z',to:'2017-12-11T22:30:00.000Z'))&_a=(viewMode:edit)";
    }

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.title = "Kibana Dashboard";

    if (iframeContainerRef.current) {
      iframeContainerRef.current.appendChild(iframe);
    }

    return () => {
      if (iframeContainerRef.current) {
        iframeContainerRef.current.innerHTML = "";
      }
    };
  }, [datacenterId]);

  return (
    <div className="kibana-container">
      <header className="kibana-header">
        {datacenterId === "datacenter1" ? "Visualisation du Data Center 1" : "Visualisation du Data Center 2"}
      </header>
      <div ref={iframeContainerRef} className="kibana-iframe-container"></div>
    </div>
  );
};

export default KibanaPage;

