import React, { Component } from 'react';

class AppointmentCard extends Component {
    render() {
        return (
            <div className="card" style={{ background: this.props.color, boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)", borderRadius: "14px", width: '100%', height: '124px', padding: '18px', fontFamily: 'Inter UI', marginBottom: '24px' }}>
                <div className="card__subtitle" style={{ color: this.props.color ? 'white' : 'black', opacity: '0.7', fontWeight: '600', lineHeight: '14px', fontSize: '15px', letterSpacing: '-0.016em' }}>
                    {this.props.subtitle.toUpperCase()}
                </div>
                <div className="card__title" style={{
                    fontSize: '28px', letterSpacing: '-0.015em', lineHeight: '34px', marginTop: '7px', 'color': this.props.color ? 'white' : 'black', fontWeight: 'bold'
                }}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default AppointmentCard;