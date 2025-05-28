"use client";

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
// analog zu https://www.finanzfluss.de/rechner/zinseszinsrechner/
const RenditenRechner: React.FC = () => {
    const [age, setAge] = useState<number>(30);
    const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100);
    const [data, setData] = useState<any>(null);
    const [totalCapital, setTotalCapital] = useState<number | null>(null);

    const formatNumber = (num: number): string => {
        return num.toFixed(2)
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const calculateReturns = () => {
        const annualRate = 0.06; // 6% annual return
        const retirementAge = 67;
        const yearsToInvest = retirementAge - age;
        const monthsToInvest = yearsToInvest * 12;

        let totalAmount = 0;
        let chartData = [];
        for (let month = 1; month <= monthsToInvest; month++) {
            totalAmount = (totalAmount + monthlyInvestment) * (1 + annualRate / 12);
            if (month % 12 === 0) {
                chartData.push({ year: age + Math.floor(month / 12), amount: totalAmount });
            }
        }

        const labels = chartData.map((entry) => entry.year);
        const amounts = chartData.map((entry) => entry.amount);

        setData({
            labels,
            datasets: [
                {
                    label: 'Gesamtkapital (€)',
                    data: amounts,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.1,
                },
            ],
        });
        
        setTotalCapital(totalAmount);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Renditenrechner</h1>
            <div style={{ marginBottom: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Dein aktuelles Alter:
                </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    style={{ 
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
            </div>
            <div style={{ marginBottom: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Monatlicher Anlagebetrag (€):
                </label>
                <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    style={{ 
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
            </div>
            <button 
                onClick={calculateReturns} 
                style={{ 
                    marginBottom: '30px',
                    padding: '10px 20px',
                    backgroundColor: '#4b86b4',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: '100%'
                }}
            >
                Berechnen
            </button>
            
            {totalCapital !== null && (
                <div style={{ 
                    marginBottom: '30px',
                    textAlign: 'center',
                    padding: '15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '8px'
                }}>
                    <h3>
                        Wenn du ab heute jeden Monat {formatNumber(monthlyInvestment)} € zu einer Rendite von 6% pro Jahr 
                        investieren würdest, hättest du zum Renteneintritt:
                    </h3>
                    <p style={{ 
                        color: 'blue', 
                        textDecoration: 'underline',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        margin: '10px 0 0'
                    }}>
                        {formatNumber(totalCapital)} €
                    </p>
                </div>
            )}
            
            {data && (
                <div style={{ 
                    marginTop: '30px',
                    height: '500px',
                    width: '100%'
                }}>
                    <Line 
                        data={data} 
                        options={{ 
                            responsive: true, 
                            maintainAspectRatio: false,
                            plugins: { 
                                legend: { 
                                    position: 'top' 
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return ' ' + formatNumber(context.raw);
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        callback: function(value) {
                                            return formatNumber(Number(value));
                                        }
                                    }
                                }
                            }
                        }} 
                    />
                </div>
            )}
        </div>
    );
};

export default RenditenRechner;