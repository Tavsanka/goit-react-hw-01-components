import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

export default class Statistics extends Component {
  static defaultProps = {
    title: "",
  };

  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  getRandomColor() {
    const colors = ["#4CC6F5", "#A17CF7", "#FF6B8A", "#24B47E", "#FDBA5A"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    const { title, stats } = this.props;

    // Usuń duplikaty na podstawie pola 'label'
    const uniqueStats = [];
    const labels = new Set();

    for (const stat of stats) {
      if (!labels.has(stat.label)) {
        uniqueStats.push(stat);
        labels.add(stat.label);
      }
    }

    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className="item"
              style={{ backgroundColor: this.getRandomColor() }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
