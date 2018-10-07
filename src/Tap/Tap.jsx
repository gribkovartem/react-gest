import React, { Component } from 'react';

export class Tap extends Component {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle className={styles.tap} cx="89.43" cy="64.48" r="19.46"/>
                <path className={styles.handTap} d="M139.93,102.68,98.81,95.75V65.2A9.25,9.25,0,0,0,89.56,56h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,111.77c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,102.68Z"/>
            </svg>
        );
    }
}