package main

import (
	"net/http"
	"time"
	"fmt"
)
func clockHandler(w http.ResponseWriter, r *http.Request) {
	// Format the current time in RFC1123 format
	t := time.Now().Format(time.RFC1123)
	// Write the response as plain text
	fmt.Fprintf(w, t)
}

func main() {
		// Serve static files from the "static" directory
		http.Handle("/", http.FileServer(http.Dir("./app")))
		// Handle all requests using net/http
		http.HandleFunc("/clock", clockHandler)
		// Listen and serve on port 8080
		http.ListenAndServe(":8081", nil)
}
