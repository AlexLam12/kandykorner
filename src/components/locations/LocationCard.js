import React from "react"


export const AnimalCard = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__footage">{location.footage}</div>
    </section>
)