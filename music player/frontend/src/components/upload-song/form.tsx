"use client";
import { useState } from "react";
import "./form.css";
import { useSnackbar } from "notistack";

export const UploadForm = () => {
    const [file, setFile] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    const handleFileChange = (e: any) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            enqueueSnackbar("Please select a file first", { variant: "success" });
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (result.success) {
                enqueueSnackbar(result.message, { variant: "success" });
            } else {
                enqueueSnackbar(result.message, { variant: "error" });
            }
        } catch (error) {
            console.error("Upload error:", error);
            enqueueSnackbar("Upload failed", { variant: "error" });
        }
    };

    return (
        <div className="uploadDiv">
            <input type="file" name="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Submit</button>
        </div>
    );
};
