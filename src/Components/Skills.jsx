import React from 'react';

const Skills = () => {
    return (
        <div className='mt-14 bg-slate-950 w-full rounded-lg'>
            <h1 className='text-left text-white text-2xl font-semibold pl-15 p-10'>My Skills:</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto p-20'>
                <div className='text-left'>
                    <h4>Html:90%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="90" max="100"></progress>
                </div>
                <div className='text-left'>
                    <h4>CSS:80%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="80" max="100"></progress>
                </div>
                <div className='text-left'>
                    <h4>Js:70%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="70" max="100"></progress>
                </div>
                <div className='text-left'>
                    <h4>React:70%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="70" max="100"></progress>
                </div>
                <div className='text-left'>
                    <h4>Express:60%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="60" max="100"></progress>
                </div>
                <div className='text-left'>
                    <h4>MongoDB:70%</h4>
                    <progress className="progress progress-error w-56 h-3 text-orange-400 border-2 border-gray-400" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;