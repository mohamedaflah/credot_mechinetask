export async function imageUrlToFileObject(imageUrl: string): Promise<File> {
    try {
      // Fetch the image data
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Extract filename from the URL
      const filename = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
  
      // Create a new File object
      const fileObject = new File([blob], filename, { type: blob.type });
  
      return fileObject;
    } catch (error) {
      // Handle errors, e.g., if fetch fails
      console.error("Error converting image URL to File object:", error);
      throw error; // Rethrow the error for further handling
    }
  }
  