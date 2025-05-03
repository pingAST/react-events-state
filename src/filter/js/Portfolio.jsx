import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from "../projects.json";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        const categories = projects.map(p => p.category);
        const uniqueCategories = [...new Set(categories)];

        this.state = {
            filters: ['All', ...uniqueCategories],
            selectedFilter: 'All',
            projects: projects
        };
    }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter });
    };

    render() {
        const { selectedFilter, projects, filters } = this.state;
        const filteredProjects = selectedFilter === 'All'
            ? projects
            : projects.filter(p => p.category === selectedFilter);

        return (
            <div>
                <Toolbar
                    filters={filters}
                    selected={selectedFilter}
                    onSelectFilter={this.handleSelectFilter}
                />
                <ProjectList projects={filteredProjects} />
            </div>
        );
    }
}

export default Portfolio;