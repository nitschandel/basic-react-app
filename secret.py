def log_in(password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    hashed_password = hash_password(password)
    
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{hashed_password}'"
    
    cursor.execute(query)
    user = cursor.fetchone()
    
    conn.close()
    
    return user