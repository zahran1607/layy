import urllib.request
import argparse

# membuat objek ArgumentParser
parser = argparse.ArgumentParser(description='Perintah wget')

# menambahkan argumen command line
parser.add_argument('url', help='URL file yang akan diunduh')
parser.add_argument('-o', '--output', help='Nama file output')

# mengambil argumen dari command line
args = parser.parse_args()

# mengunduh file dari URL
try:
    urllib.request.urlretrieve(args.url, args.output)
    print(f"File berhasil diunduh dari {args.url}")
except Exception as e:
    print(f"Gagal mengunduh file dari {args.url}: {e}")

# URL contoh : https://www.bionumerics.com/sites/default/files/download/Antibiotics%20sample%20data.zip
# jalankan di terminal dengan perintah :
# python tugas2.py https://www.bionumerics.com/sites/default/files/download/Antibiotics%20sample%20data.zip -o Dataset.zip