import React from "react";
// Using tailwindcss

type Props = {
    
};

const Dev: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-8 flex flex-col">
            <div className="flex flex-col justify-center p-8">
                <h3>Emil Bertholdsson</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    condimentum lectus a lacus aliquam rutrum. Maecenas placerat
                    interdum iaculis. Etiam vel arcu volutpat quam dignissim
                    varius. Aliquam eu aliquam massa. Etiam imperdiet efficitur
                    tempor. Donec pharetra urna cursus purus bibendum, at
                    suscipit lectus pharetra. Vivamus tincidunt, turpis eu
                </p>
            </div>
        </div>
    );
};

export default Dev;
