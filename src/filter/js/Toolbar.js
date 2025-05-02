import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => (
    <div className="toolbar">
        {filters.map(filter => (
            <button
                key={filter}
                className={filter === selected ? 'filter-selected' : 'filter'}
                onClick={() => onSelectFilter(filter)}
            >
                {filter}
            </button>
        ))}
    </div>
);

export default Toolbar;