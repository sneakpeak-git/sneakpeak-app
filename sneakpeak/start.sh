# Check if the file exists
if [ ! -f /src/config/api.js ]; then
    # If not, ask the user for input
    echo "File not found. Please enter the host address:"
    read host_address

    # Create the directory if it doesn't exist
    mkdir -p /src/config

    # Write the file using the user input
    echo "export default {" > /src/config/api.js
    echo "  host: \"http://$host_address:3000\"," >> /src/config/api.js
    echo "};" >> /src/config/api.js
fi

# After everything, the script runs 'yarn start'
yarn start
