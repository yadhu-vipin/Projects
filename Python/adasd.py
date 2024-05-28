import base64

def custom_base64_decode(encoded_string):
    # Calculate the number of padding characters needed
    padding_needed = 4 - (len(encoded_string) % 4)
    if padding_needed != 4:
        # Add padding "=" characters
        encoded_string += "=" * padding_needed

    # Decode the Base64 string
    decoded_bytes = base64.b64decode(encoded_string)
    decoded_string = decoded_bytes.decode('utf-8')
    return decoded_string

# Example usage
encoded_string = "RodWIuY29tL1RoZ"
decoded_string = custom_base64_decode(encoded_string)
print("Decoded String:", decoded_string)
