import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-green-600'>How will you improve the performance of a React Application?</h1>
            <p>We can’t begin to optimize an app without knowing exactly when and where to optimize. You might be asking, “Where do we start?”

                During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.

                However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effort.

                In this situation, we could configure every component to only render or diff when necessary, to avoid wasting resources and time.</p>

            <h1 className='text-3xl text-green-500'>What are the different ways to manage a state in a React application</h1>

            <p>Each individual component can have it’s own state. This is sometimes referred to as a local state.

                Local state is only included inside of one component and is not shared across any other siblings or parent components.

                This is great for small UI tweaks, but in general you should keep the number of components with a local state to minimum.

                To make it more manageable, it is recommended to create one global state, usually on the main parent container App and then pass the individual pieces of the global state to the child components as a prop.

                Having most of your application state in the top level component will make it easier to manage any changes.</p>

            <h1 className='text-3xl text-green-500'>How does prototypical inheritance work?</h1>
            <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>

            <h1 className='text-3xl text-green-500'>What is a unit test? Why should write unit tests?</h1>
            <p>its behavior independently from other parts. A typical unit test contains 3 phases: First, it initializes a small piece of an application it wants to test (also known as the system under test, or SUT), then it applies some stimulus to the system under test (usually by calling a method on it), and finally, it observes the resulting behavior. If the observed behavior is consistent with the expectations, the unit test passes, otherwise, it fails, indicating that there is a problem somewhere in the system under test. These three unit test phases are also known as Arrange, Act and Assert, or simply AAA.</p>
        </div>
    );
};

export default Blogs;