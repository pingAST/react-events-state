import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        const projects = [
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites"
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers"
        }]


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