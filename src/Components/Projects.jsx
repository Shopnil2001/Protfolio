import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-left text-3xl font-bold py-4'>My best Projects:</h1>
            <div>
                <h1 className='text-left text-3xl '>J-Hub</h1>
                <h1 className='text-left text-xl font-semibold '>This is a website for searching and applying to jobs.Companies can post job too.For better experience visit <a className='text-cyan-500' href='https://genuine-semifreddo-58986d.netlify.app'>Link..</a></h1>
                <h1 className='text-left text-xl font-medium pb-2'>I used Js, React, MongoDB,Node.js, express and some other technology for this project</h1>

                <iframe src="https://genuine-semifreddo-58986d.netlify.app" title='JobHunt' className='w-full h-96'></iframe>

            </div>
            <div>
                <h1 className='text-left text-3xl '>CarBD</h1>
                <h1 className='text-left text-xl font-semibold '>This is a website for Booking car to buy.user can add new car to the website for experiment <a className='text-cyan-500' href='https://assignment-10-23e95.web.app/'>Link..</a></h1>
                <h1 className='text-left text-xl font-medium pb-2'>I used Js, React, MongoDB,Node.js, express and some other technology for this project</h1>

                <iframe src="https://assignment-10-23e95.web.app/" title='JobHunt' className='w-full h-96'></iframe>

            </div>
            <div>
                <h1 className='text-left text-3xl '>J-Hub</h1>
                <h1 className='text-left text-xl font-semibold '>This is a website for an university hostel.User can buy subscription and request meals. there is also admin panel where admin can add food and serve food <a className='text-cyan-500' href='https://final-assignment-ba96d.web.app/'>Link..</a></h1>
                <h1 className='text-left text-xl font-medium pb-2'>I used Js, React, MongoDB,Node.js, express and some other technology for this project</h1>

                <iframe src="https://final-assignment-ba96d.web.app/" title='JobHunt' className='w-full h-96'></iframe>

            </div>
        </div>
    );
};

export default Projects;